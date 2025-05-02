[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / onTimeout

# Function: onTimeout()

> **onTimeout**(`timeout`, `callback`): () => `void`

Defined in: [src/utils/general/onTimeout.ts:13](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/general/onTimeout.ts#L13)

## Parameters

### timeout

`number`

### callback

() => `void`

## Returns

> (): `void`

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
