export {}
// import getWindowObj from './getWindowObj';

// type SetNetworkIdleCallbackOptions = {
//   /**
//    * @description if set it will cancel the observation after ms time.
//    */
//   cancelTimeoutMs?: number;
//   /**
//    * @description check cycle time in ms
//    * @default 1000
//    */
//   intervalMs?: number;
//   /**
//    * @description trigger the check when the window is loaded.
//    * @default true
//    */
//   triggerOnWindowLoad?: boolean;
// };

// type RequestList = (XMLHttpRequestEventTarget | null)[];

// /**
//  * 
//  * @description --Browser only -- a function that takes callback to be executed when the network becomes idle, which means no active network requests (like XHR or Fetch API) are ongoing.
//  * @example 
//  * `// Usage
// const cancel = networkRequestMonitor(() => {
//     console.log('Network is now idle.');
// });

// // to cancel
// cancel();`
//  */
// export default function networkRequestMonitor(
//   callback: () => void,
//   options: SetNetworkIdleCallbackOptions
// ): () => void {
//   if (!callback)
//     throw new Error('setNetworkIdleCallback Callback is undefined');

//     const window = getWindowObj() as any;
//   const {
//     intervalMs = 1000,
//     triggerOnWindowLoad = true,
//     cancelTimeoutMs,
//   } = options || {};

//   let activeRequests = 0;
//   let intervalId: NodeJS.Timeout;
//   let startedRequests: RequestList = [];
//   let endedRequests: RequestList = [];
//   let startedRequestsCount = 0;
//   let endedRequestsCount = 0;
//   let isMonitoring = true;

//   // Override XMLHttpRequest
//   const oldXHR = window.XMLHttpRequest;
//   function newXHR() {
//     const realXHR = new oldXHR();
//     realXHR.addEventListener('loadend', function (e) {
//       endedRequests.push(e.target);
//     });
//     realXHR.addEventListener('loadstart', function (e) {
//       startedRequests.push(e.target)
//     });

//     return realXHR;
//   }
//   window.XMLHttpRequest = newXHR;

//   const oldFetch = window.fetch;

//   window.fetch = function (e) {
//     activeRequests += 1;
//     return oldFetch.apply(this, arguments).finally(() => {
//       activeRequests -= 1;
//     });
//   };

//   function onLoad() {
//     intervalId = setInterval(() => {
//       if (!isMonitoring) return clearInterval(intervalId);

//       if (activeRequests === 0) {
//         clearInterval(intervalId);
//         requestIdleCallback(callback);
//         window.removeEventListener('load', onLoad);
//       }
//     }, intervalMs);
//   }

//   if (triggerOnWindowLoad) {
//     window.addEventListener('load', onLoad);
//   } else {
//     onLoad();
//   }

//   return () => {
//     isMonitoring = false;
//   };
// }
