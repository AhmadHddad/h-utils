[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / ReadonlyKeys

# Type alias: ReadonlyKeys\<T\>

> **ReadonlyKeys**\<`T`\>: `{ [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P> }`\[keyof `T`\]

ReadonlyKeys

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

## Type parameters

• **T** *extends* `object`

## Source

[src/utils/utilityTypes.ts:55](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/utilityTypes.ts#L55)
