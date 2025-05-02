[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / removeEventListener

# Function: removeEventListener()

> **removeEventListener**\<`T`\>(`obj`, ...`args`): `void`

Defined in: [src/utils/browser/removeEventListener.ts:7](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/removeEventListener.ts#L7)

## Type Parameters

### T

`T` *extends* `EventTarget` \| `HTMLElement` \| `Window` \| `Document`

## Parameters

### obj

`T`

### args

\[`string`, [`Fn`](../type-aliases/Fn.md), `...any[]`\] | `Parameters`\<`T`\[`"removeEventListener"`\]\>[]

## Returns

`void`

## Description

will check if the passed object accepts removeEventListener and add it.

## Example

```ts
removeEventListener(target.current, "touchend", preventDefault);
```
