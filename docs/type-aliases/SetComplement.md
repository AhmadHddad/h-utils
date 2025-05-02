[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / SetComplement

# Type Alias: SetComplement\<A, A1\>

> **SetComplement**\<`A`, `A1`\> = [`SetDifference`](SetDifference.md)\<`A`, `A1`\>

Defined in: [src/utils/utilityTypes.ts:220](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L220)

SetComplement

## Type Parameters

### A

`A`

### A1

`A1` *extends* `A`

## Desc

Set complement of given union types `A` and (it's subset) `A1`

## Example

```ts
// Expect: "1"
  SetComplement<'1' | '2' | '3', '2' | '3'>;
```
