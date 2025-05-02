[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / MutableKeys

# Type Alias: MutableKeys\<T\>

> **MutableKeys**\<`T`\> = `{ [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P> }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:149](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L149)

MutableKeys

## Type Parameters

### T

`T` *extends* `object`

## Desc

Get union type of keys that are mutable in object type `T`
Credit: Matt McCutchen
IfEquals it will check if x equals y
https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript

## Example

```ts
type Props = { readonly foo: string; bar: number };

  // Expect: "bar"
  type Keys = MutableKeys<Props>;
```
