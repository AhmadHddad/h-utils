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

[src/utils/browser/setNetworkIdleCallback.ts:16](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/browser/setNetworkIdleCallback.ts#L16)
