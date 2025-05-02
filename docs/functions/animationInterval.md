[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / animationInterval

# Function: animationInterval()

> **animationInterval**(`ms`, `signal`, `callback`): `void`

Defined in: [src/utils/browser/animationInterval.ts:16](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/animationInterval.ts#L16)

## Parameters

### ms

`number`

### signal

`AbortSignal`

### callback

(`time`) => `void`

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
