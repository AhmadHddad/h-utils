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

[src/utils/utilityTypes.ts:109](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L109)
