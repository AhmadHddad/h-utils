[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / ReadonlyKeys

# Type Alias: ReadonlyKeys\<T\>

> **ReadonlyKeys**\<`T`\> = `{ [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P> }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:55](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L55)

ReadonlyKeys

## Type Parameters

### T

`T` *extends* `object`

## Desc

Get union type of keys that are readonly in object type `T`
Credit: Matt McCutchen
https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript

## Example

```ts
type Props = { readonly foo: string; bar: number };

  // Expect: "foo"
  type Keys = ReadonlyKeys<Props>;
```
