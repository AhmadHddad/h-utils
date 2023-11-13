import isBrowser from '../validation/isBrowser';


type OnUrlChangeCallback =
  | History['pushState']
  | ((popstate: PopStateEvent) => void);

type OnUrlChangeOptions = { onPush: boolean; onPop: boolean };

/**
 * @function onUrlChange
 * @description -- For Browsers --
 *  a function that takes callback that will be called whenever the url is changed (ideal for SPA)
 * @param {OnUrlChangeCallback} cb
 * @param {OnUrlChangeOptions} options
 */
export default function onUrlChange(
  cb: OnUrlChangeCallback,
  options: OnUrlChangeOptions
) {
  if (!isBrowser()) return;

  const { onPush = true, onPop = true } = options || {};

  if (onPush) {
    (function (history) {
      var pushState = history.pushState;
      history.pushState = function () {
        //@ts-ignore
        cb(arguments);
        //@ts-ignore
        return pushState.apply(history, arguments);
      };
    })(window.history);
  }
  if (onPop) {
    window.addEventListener('popstate', cb as ((popstate: PopStateEvent) => void));
  }
}
