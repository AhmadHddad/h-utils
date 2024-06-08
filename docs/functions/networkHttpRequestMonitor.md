[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / networkHttpRequestMonitor

# Function: networkHttpRequestMonitor()

> **networkHttpRequestMonitor**(`onRequestsIdle`?, `onEachRequest`?, `options`?): () => `void`

## Parameters

• **onRequestsIdle?**

• **onEachRequest?**

• **options?**: [`NetworkHttpRequestMonitorOptions`](../type-aliases/NetworkHttpRequestMonitorOptions.md)

## Returns

`Function`

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

## Source

[src/utils/browser/networkHttpRequestMonitor.ts:18](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/browser/networkHttpRequestMonitor.ts#L18)
