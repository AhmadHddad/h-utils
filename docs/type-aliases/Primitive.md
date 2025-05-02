[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Primitive

# Type Alias: Primitive

> **Primitive** = `string` \| `number` \| `bigint` \| `boolean` \| `symbol` \| `null` \| `undefined`

Defined in: [src/utils/utilityTypes.ts:93](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L93)

Primitive

## Desc

Type representing [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types in TypeScript: `string | number | bigint | boolean |  symbol | null | undefined`

## Example

```ts
type Various = number | string | object;

   // Expect: object
  type Cleaned = Exclude<Various, Primitive>
```
