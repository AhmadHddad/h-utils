[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / SetComplement

# Type Alias: SetComplement\<A, A1\>

> **SetComplement**\<`A`, `A1`\> = [`SetDifference`](SetDifference.md)\<`A`, `A1`\>

Defined in: [src/utils/utilityTypes.ts:220](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L220)

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
