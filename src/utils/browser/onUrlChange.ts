import isBrowser from '../validation/isBrowser';
import getWindowObj from './getWindow';

/**
 * @function onUrlChange
 * @description -- For Browsers --
 *  a function that takes callback that will be called whenever the url is changed (ideal for SPA)
 */
export default function onUrlChange(
  onPush?: History['pushState'],
  onPop?: (popstate: PopStateEvent) => void
): () => void {
  if (!isBrowser()) return () => {};
  const window = getWindowObj();

  if (onPush) {
    (function (history) {
      const pushState = history.pushState;
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
      onPop as (popstate: PopStateEvent) => void
    );
  }

  return () => {
    if (onPop) {
      window.removeEventListener(
        'popstate',
        onPop as (popstate: PopStateEvent) => void
      );
    }
  };
}
