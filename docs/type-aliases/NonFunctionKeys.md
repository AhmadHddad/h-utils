[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / NonFunctionKeys

# Type alias: NonFunctionKeys\<T\>

> **NonFunctionKeys**\<`T`\>: `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K }`\[keyof `T`\]

NonFunctionKeys

## Desc

Get union type of keys that are non-functions in object type `T`

## Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "name | someKey"
  type Keys = NonFunctionKeys<MixedProps>;
```

## Type parameters

• **T** *extends* `object`

## Source

[src/utils/utilityTypes.ts:133](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L133)
