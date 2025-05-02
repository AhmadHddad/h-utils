[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Unionize

# Type Alias: Unionize\<T\>

> **Unionize**\<`T`\> = `{ [P in keyof T]: { [Q in P]: T[P] } }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:299](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L299)

Unionize

## Type Parameters

### T

`T` *extends* `object`

## Desc

Disjoin object to form union of objects, each with single property

## Example

```ts
type Props = { name: string; age: number; visible: boolean };

  // Expect: { name: string; } | { age: number; } | { visible: boolean; }
  type UnionizedType = Unionize<Props>;
```
