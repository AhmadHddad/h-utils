[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / addEventListener

# Function: addEventListener()

> **addEventListener**\<`T`\>(`obj`, ...`args`): `void`

Defined in: [src/utils/browser/addEventListener.ts:6](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/addEventListener.ts#L6)

## Type Parameters

### T

`T` *extends* `EventTarget` \| `HTMLElement` \| `Window` \| `Document`

## Parameters

### obj

`T`

### args

\[`string`, [`Fn`](../type-aliases/Fn.md), `...any[]`\] | `Parameters`\<`T`\[`"addEventListener"`\]\>[]

## Returns

`void`

## Description

will check if the passed object accepts addEventListener and add it.

## Example

```ts
addEventListener(event.target, "touchend", preventDefault, { passive: false });
```
