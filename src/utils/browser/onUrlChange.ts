

export default function onUrlChange(cb: () => void) {
  return (function (history) {
    var pushState = history.pushState;
    history.pushState = function (state) {
      cb();
      return pushState.apply(history, arguments);
    };
  })(window.history);
}
