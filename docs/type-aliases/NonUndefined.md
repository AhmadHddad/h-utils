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

[src/utils/utilityTypes.ts:109](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L109)
