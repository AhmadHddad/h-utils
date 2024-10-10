[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / setNetworkIdleCallback

# Function: setNetworkIdleCallback()

> **setNetworkIdleCallback**(`callback`, `options`?): () => `void`

## Parameters

• **callback**: `undefined` \| (`startedRequests`, `endedRequests`) => `void`

• **options?**: `Omit`\<[`NetworkHttpRequestMonitorOptions`](../type-aliases/NetworkHttpRequestMonitorOptions.md), `"cancelAfterIdle"`\>

## Returns

`Function`

### Returns

`void`

## Description

--Browser only -- a function that takes callback to be executed when the network becomes idle, which means no active network requests (like XHR or Fetch API) are ongoing.

## Example

```ts
`// Usage
const cancel = setNetworkIdleCallback(() => {
   console.log('Network is now idle.');
});

// to cancel
cancel();`
```

## Source

[src/utils/browser/setNetworkIdleCallback.ts:16](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/browser/setNetworkIdleCallback.ts#L16)
