[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / NonUndefined

# Type alias: NonUndefined\<A\>

> **NonUndefined**\<`A`\>: `A` *extends* `undefined` ? `never` : `A`

NonUndefined

## Desc

Exclude undefined from set `A`

## Example

```ts
// Expect: "string | null"
  SymmetricDifference<string | null | undefined>;
```

## Type parameters

• **A**

## Source

[src/utils/utilityTypes.ts:109](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L109)
