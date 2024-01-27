import { NetworkHttpRequestMonitorOptions, NetworkRequestList } from '../types';
import getWindow from './getWindow';

/**
 * 
 * @description --Browser only -- a function that takes onRequestsIdle to be executed when the network becomes idle, which means no active network requests (like XHR or Fetch API) are ongoing.
 * @example 
 * `// Usage
const cancel = networkHttpRequestMonitor((startedRequests, endedRequests) => {
    console.log('Network is now idle.');
}, (startedRequests, endedRequests, activeRequestsCount)=>{
console.log("THIS WILL BE CALLED ON EVERY NETWORK REQUEST", {startedRequests, endedRequests, activeRequestsCount})
});

// to cancel
cancel();`
 */
export default function networkHttpRequestMonitor(
  onRequestsIdle?: (
    startedRequests: NetworkRequestList,
    endedRequests: NetworkRequestList
  ) => void,
  onEachRequest?: (
    startedRequests: NetworkRequestList,
    endedRequests: NetworkRequestList,
    activeRequestsCount: number
  ) => void,
  options?: NetworkHttpRequestMonitorOptions
): () => void {
  const window = getWindow() as any;
  const {
    intervalMs = 1000,
    triggerOnWindowLoad = true,
    cancelAfterIdle = true,
  } = options || {};

  let activeRequestsCount = 0;
  let intervalId: NodeJS.Timeout;
  let startedRequests: NetworkRequestList = [];
  let endedRequests: NetworkRequestList = [];
  let isMonitoring = true;

  // Override XMLHttpRequest
  const oldXHR = window.XMLHttpRequest;
  function newXHR() {
    const realXHR = new oldXHR();
    realXHR.addEventListener('loadend', function (e) {
      endedRequests.push(e.target);
      activeRequestsCount -= 1;
      callOnRequest();
    });
    realXHR.addEventListener('loadstart', function (e) {
      startedRequests.push(e.target);
      activeRequestsCount += 1;
      callOnRequest();
    });

    return realXHR;
  }
  window.XMLHttpRequest = newXHR;

  const oldFetch = window.fetch;
  window.fetch = function () {
    activeRequestsCount += 1;
    startedRequests.push([
      ...(arguments as unknown as Parameters<typeof fetch>),
    ]);
    return oldFetch
      .apply(this, arguments)
      .then(async (res) => {
        endedRequests.push(res);
        activeRequestsCount -= 1;

        callOnRequest();
        return res;
      })
      .catch(() => {
        activeRequestsCount -= 1;
        callOnRequest();
      });
  };

  function onLoad() {
    intervalId = setInterval(() => {
      if (!isMonitoring) return clearInterval(intervalId);

      if (activeRequestsCount === 0) {
        requestIdleCallback(() =>
          onRequestsIdle?.(startedRequests, endedRequests)
        );

        if (cancelAfterIdle) {
          clearInterval(intervalId);
          window.removeEventListener('load', onLoad);
        }
      }
    }, intervalMs);
  }

  function callOnRequest() {
    isMonitoring &&
      onEachRequest?.(startedRequests, endedRequests, activeRequestsCount);
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
