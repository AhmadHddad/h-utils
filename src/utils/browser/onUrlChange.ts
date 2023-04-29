import isBrowser from '../validation/isBrowser';

/**
 * @description -- For Browsers --
 *  a function that takes callback that will be called whenever the url is changed (ideal for SPA)
 */
export default function onUrlChange(
  cb: (data: any, unused: string, url?: string | URL | null | undefined) => void
) {
  if (!isBrowser()) return;

  return (function(history) {
    var pushState = history.pushState;
    history.pushState = function() {
      //@ts-ignore
      cb(arguments);
      //@ts-ignore
      return pushState.apply(history, arguments);
    };
  })(window.history);
}
