[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / FunctionKeys

# Type alias: FunctionKeys\<T\>

> **FunctionKeys**\<`T`\>: `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never }`\[keyof `T`\]

FunctionKeys

## Desc

Get union type of keys that are functions in object type `T`

## Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "setName | someFn"
  type Keys = FunctionKeys<MixedProps>;
```

## Type parameters

• **T** *extends* `object`

## Source

[src/utils/utilityTypes.ts:120](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L120)
