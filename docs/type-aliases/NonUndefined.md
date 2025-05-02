[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / NonUndefined

# Type Alias: NonUndefined\<A\>

> **NonUndefined**\<`A`\> = `A` *extends* `undefined` ? `never` : `A`

Defined in: [src/utils/utilityTypes.ts:109](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L109)

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
