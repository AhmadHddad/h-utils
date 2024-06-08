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

[src/utils/browser/removeEventListener.ts:7](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/browser/removeEventListener.ts#L7)
