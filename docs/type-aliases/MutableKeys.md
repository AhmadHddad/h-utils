[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / MutableKeys

# Type alias: MutableKeys\<T\>

> **MutableKeys**\<`T`\>: `{ [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P> }`\[keyof `T`\]

MutableKeys

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

## Type parameters

• **T** *extends* `object`

## Source

[src/utils/utilityTypes.ts:149](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L149)
