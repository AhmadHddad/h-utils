[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / onTimeout

# Function: onTimeout()

> **onTimeout**(`timeout`, `callback`): () => `void`

## Parameters

• **timeout**: `number`

• **callback**

## Returns

`Function`

### Returns

`void`

## Description

a cleaner way to use setTimeout with ability to clear timeout wihtout saving the timeoutId;

## Example

```ts
`const cancelTimeout = onTimeout(100, ()=>{
// Do something here
});

// on destory.
cancelTimeout();
`
```

## Source

[src/utils/general/onTimeout.ts:13](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/general/onTimeout.ts#L13)
