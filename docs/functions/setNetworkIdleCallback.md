[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / setNetworkIdleCallback

# Function: setNetworkIdleCallback()

> **setNetworkIdleCallback**(`callback`, `options?`): () => `void`

Defined in: [src/utils/browser/setNetworkIdleCallback.ts:16](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/setNetworkIdleCallback.ts#L16)

## Parameters

### callback

(`startedRequests`, `endedRequests`) => `void`

### options?

`Omit`\<[`NetworkHttpRequestMonitorOptions`](../type-aliases/NetworkHttpRequestMonitorOptions.md), `"cancelAfterIdle"`\>

## Returns

> (): `void`

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
