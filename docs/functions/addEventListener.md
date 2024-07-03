[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / addEventListener

# Function: addEventListener()

> **addEventListener**\<`T`\>(`obj`, ...`args`): `void`

## Type parameters

• **T** *extends* `EventTarget` \| `Document` \| `HTMLElement` \| `Window`

## Parameters

• **obj**: `null` \| `T`

• ...**args**: [`string`, `null` \| [`Fn`](../type-aliases/Fn.md), `...any[]`] \| `Parameters`\<`T`\[`"addEventListener"`\]\>[]

## Returns

`void`

## Description

will check if the passed object accepts addEventListener and add it.

## Example

```ts
addEventListener(event.target, "touchend", preventDefault, { passive: false });
```

## Source

[src/utils/browser/addEventListener.ts:6](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/browser/addEventListener.ts#L6)
