import isBrowser from '../validation/isBrowser';

/**
 * @function onUrlChange
 * @description -- For Browsers --
 *  a function that takes callback that will be called whenever the url is changed (ideal for SPA)
 * @param {History['pushState']} onPush
 * @param {(popstate: PopStateEvent) => void} onPop
 */
export default function onUrlChange(
  onPush?: History['pushState'],
  onPop?: (popstate: PopStateEvent) => void
) {
  if (!isBrowser()) return;

  if (onPush) {
    (function (history) {
      var pushState = history.pushState;
      history.pushState = function () {
        //@ts-ignore
        onPush(...arguments);
        //@ts-ignore
        return pushState.apply(history, arguments);
      };
    })(window.history);
  }
  if (onPop) {
    window.addEventListener(
      'popstate',
      onPush as (popstate: PopStateEvent) => void
    );
  }
}
