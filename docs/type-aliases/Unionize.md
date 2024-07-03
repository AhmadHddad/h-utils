[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Unionize

# Type alias: Unionize\<T\>

> **Unionize**\<`T`\>: `{ [P in keyof T]: { [Q in P]: T[P] } }`\[keyof `T`\]

Unionize

## Desc

Disjoin object to form union of objects, each with single property

## Example

```ts
type Props = { name: string; age: number; visible: boolean };

  // Expect: { name: string; } | { age: number; } | { visible: boolean; }
  type UnionizedType = Unionize<Props>;
```

## Type parameters

• **T** *extends* `object`

## Source

[src/utils/utilityTypes.ts:299](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L299)
