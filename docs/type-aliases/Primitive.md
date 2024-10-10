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

[src/utils/utilityTypes.ts:93](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L93)
