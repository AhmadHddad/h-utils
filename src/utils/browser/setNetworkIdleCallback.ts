import getWindowObj from './getWindowObj';

type SetNetworkIdleCallbackOptions = {
  /**
   * @description if set it will cancel the observation after ms time.
   */
  cancelTimeoutMs?: number;
  /**
   * @description check cycle time in ms
   * @default 1000
   */
  intervalMs?: number;
  /**
   * @description trigger the check when the window is loaded.
   * @default true
   */
  triggerOnWindowLoad?: boolean;
};

/**
 * 
 * @description --Browser only -- a function that takes callback to be executed when the network becomes idle, which means no active network requests (like XHR or Fetch API) are ongoing.
 * @example 
 * `// Usage
const cancel = setNetworkIdleCallback(() => {
    console.log('Network is now idle.');
});

// to cancel
cancel();`
 */
export default function setNetworkIdleCallback(
  callback: () => void,
  options: SetNetworkIdleCallbackOptions
): () => void {
  if (!callback)
    throw new Error('setNetworkIdleCallback Callback is undefined');

  const window = getWindowObj() as any;
  const {
    intervalMs = 1000,
    triggerOnWindowLoad = true,
    cancelTimeoutMs,
  } = options || {};

  let activeRequests = 0;
  let intervalId: NodeJS.Timeout;
  let isMonitoring = true;

  // Override XMLHttpRequest
  const oldXHR = window.XMLHttpRequest;
  function newXHR() {
    const realXHR = new oldXHR();
    realXHR.addEventListener('loadend', function () {
      activeRequests -= 1;
    });
    realXHR.addEventListener('loadstart', function () {
      activeRequests += 1;
    });

    return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  const oldFetch = window.fetch;

  window.fetch = function () {
    activeRequests += 1;
    return oldFetch.apply(this, arguments).finally(() => {
      activeRequests -= 1;
    });
  };

  function onLoad() {
    intervalId = setInterval(() => {
      if (!isMonitoring) return clearInterval(intervalId);

      if (activeRequests === 0) {
        clearInterval(intervalId);
        requestIdleCallback(callback);
        window.removeEventListener('load', onLoad);
      }
    }, intervalMs);

    if (cancelTimeoutMs) {
      let id = setTimeout(() => {
        isMonitoring = false;
        clearTimeout(id);
      }, cancelTimeoutMs);
    }
  }

  if (triggerOnWindowLoad) {
    window.addEventListener('load', onLoad);
  } else {
    onLoad();
  }

  return () => {
    isMonitoring = false;
  };
}
