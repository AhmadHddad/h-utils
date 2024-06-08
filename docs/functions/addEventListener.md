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

[src/utils/browser/addEventListener.ts:6](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/browser/addEventListener.ts#L6)
