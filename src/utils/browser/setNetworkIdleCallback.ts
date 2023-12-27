import getWindowObj from './getWindowObj';

type SetNetworkIdleCallbackOptions = {
  timeout?: number;
  requestMargin: number;
};

export default function setNetworkIdleCallback(
  callback: () => void,
  options: SetNetworkIdleCallbackOptions
): void {
  const window = getWindowObj() as any;
  const { timeout = 1000, requestMargin = 0 } = options || {};
  let loadEnd = 0;
  let loadstart = 0;

  // Override XMLHttpRequest
  const oldXHR = window.XMLHttpRequest;
  function newXHR() {
    const realXHR = new oldXHR();
    realXHR.addEventListener('loadend', function () {
      loadEnd += 1;
    });
    realXHR.addEventListener('loadstart', function () {
      loadstart += 1;
    });
    realXHR.addEventListener('readystatechange', function () {});
    return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  const oldFetch = window.fetch;
  
  window.fetch = function () {
    loadstart += 1;
    return oldFetch.apply(this, arguments).finally(() => {
      loadEnd += 1;
    });
  };

  function onLoad() {
    const id = setInterval(() => {
      if (loadstart === loadEnd - requestMargin) {
        clearInterval(id);
        requestIdleCallback(callback);
        window.removeEventListener('load', onLoad);
      }
    }, timeout);
  }

  window.addEventListener('load', onLoad);
}
