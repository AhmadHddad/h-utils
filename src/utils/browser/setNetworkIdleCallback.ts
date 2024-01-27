import { NetworkHttpRequestMonitorOptions } from '../types';
import networkHttpRequestMonitor from './networkHttpRequestMonitor';

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
  callback: Parameters<typeof networkHttpRequestMonitor>[0],
  options: Omit<NetworkHttpRequestMonitorOptions, 'cancelAfterIdle'>
): () => void {
  if (!callback)
    throw new Error('setNetworkIdleCallback Callback is undefined');

  return networkHttpRequestMonitor(callback, undefined, {
    ...options,
    cancelAfterIdle: true,
  });
}
