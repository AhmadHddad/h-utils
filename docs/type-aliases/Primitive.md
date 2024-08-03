[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Primitive

# Type alias: Primitive

> **Primitive**: `string` \| `number` \| `bigint` \| `boolean` \| `symbol` \| `null` \| `undefined`

Primitive

## Desc

Type representing [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types in TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`

## Example

```ts
type Various = number | string | object;

   // Expect: object
  type Cleaned = Exclude<Various, Primitive>
```

## Source

[src/utils/utilityTypes.ts:93](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L93)
