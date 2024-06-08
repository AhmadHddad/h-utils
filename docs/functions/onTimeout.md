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

[src/utils/general/onTimeout.ts:13](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/general/onTimeout.ts#L13)
