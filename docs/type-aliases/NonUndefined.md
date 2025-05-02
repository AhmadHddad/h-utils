[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / NonUndefined

# Type Alias: NonUndefined\<A\>

> **NonUndefined**\<`A`\> = `A` *extends* `undefined` ? `never` : `A`

Defined in: [src/utils/utilityTypes.ts:109](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L109)

NonUndefined

## Type Parameters

### A

`A`

## Desc

Exclude undefined from set `A`

## Example

```ts
// Expect: "string | null"
  SymmetricDifference<string | null | undefined>;
```
