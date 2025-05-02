[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / SetDifference

# Type Alias: SetDifference\<A, B\>

> **SetDifference**\<`A`, `B`\> = `A` *extends* `B` ? `never` : `A`

Defined in: [src/utils/utilityTypes.ts:168](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L168)

SetDifference (same as Exclude)

## Type Parameters

### A

`A`

### B

`B`

## Desc

Set difference of given union types `A` and `B`

## Example

```ts
// Expect: "1"
  SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;

  // Expect: string | number
  SetDifference<string | number | (() => void), Function>;
```
