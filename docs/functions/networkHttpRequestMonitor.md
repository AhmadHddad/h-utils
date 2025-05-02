[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / networkHttpRequestMonitor

# Function: networkHttpRequestMonitor()

> **networkHttpRequestMonitor**(`onRequestsIdle?`, `onEachRequest?`, `options?`): () => `void`

Defined in: [src/utils/browser/networkHttpRequestMonitor.ts:18](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/browser/networkHttpRequestMonitor.ts#L18)

## Parameters

### onRequestsIdle?

(`startedRequests`, `endedRequests`) => `void`

### onEachRequest?

(`startedRequests`, `endedRequests`, `activeRequestsCount`) => `void`

### options?

[`NetworkHttpRequestMonitorOptions`](../type-aliases/NetworkHttpRequestMonitorOptions.md)

## Returns

> (): `void`

### Returns

`void`

## Description

--Browser only -- a function that takes onRequestsIdle to be executed when the network becomes idle, which means no active network requests (like XHR or Fetch API) are ongoing.

## Example

```ts
`// Usage
const cancel = networkHttpRequestMonitor((startedRequests, endedRequests) => {
   console.log('Network is now idle.');
}, (startedRequests, endedRequests, activeRequestsCount)=>{
console.log("THIS WILL BE CALLED ON EVERY NETWORK REQUEST", {startedRequests, endedRequests, activeRequestsCount})
});

// to cancel
cancel();`
```
