[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / SetComplement

# Type alias: SetComplement\<A, A1\>

> **SetComplement**\<`A`, `A1`\>: [`SetDifference`](SetDifference.md)\<`A`, `A1`\>

SetComplement

## Desc

Set complement of given union types `A` and (it's subset) `A1`

## Example

```ts
// Expect: "1"
  SetComplement<'1' | '2' | '3', '2' | '3'>;
```

## Type parameters

• **A**

• **A1** *extends* `A`

## Source

[src/utils/utilityTypes.ts:220](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L220)
