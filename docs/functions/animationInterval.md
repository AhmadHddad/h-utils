[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / animationInterval

# Function: animationInterval()

> **animationInterval**(`ms`, `signal`, `callback`): `void`

## Parameters

• **ms**: `number`

• **signal**: `AbortSignal`

• **callback**

## Returns

`void`

## Description

a reliable way to call a callback after a certain ms time.

## Example

```ts
// Usage
const controller = new AbortController();

// Create an animation callback every second:
animationInterval(1000, controller.signal, time => {
 console.log('tick!', time);
});

// And to stop it:
controller.abort();
```

## Source

[src/utils/browser/animationInterval.ts:16](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/browser/animationInterval.ts#L16)
