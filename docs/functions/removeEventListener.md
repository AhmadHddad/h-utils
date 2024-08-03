[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / removeEventListener

# Function: removeEventListener()

> **removeEventListener**\<`T`\>(`obj`, ...`args`): `void`

## Type parameters

• **T** *extends* `EventTarget` \| `Document` \| `HTMLElement` \| `Window`

## Parameters

• **obj**: `null` \| `T`

• ...**args**: [`string`, `null` \| [`Fn`](../type-aliases/Fn.md), `...any[]`] \| `Parameters`\<`T`\[`"removeEventListener"`\]\>[]

## Returns

`void`

## Description

will check if the passed object accepts removeEventListener and add it.

## Example

```ts
removeEventListener(target.current, "touchend", preventDefault);
```

## Source

[src/utils/browser/removeEventListener.ts:7](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/browser/removeEventListener.ts#L7)
