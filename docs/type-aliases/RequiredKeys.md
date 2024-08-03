[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / RequiredKeys

# Type alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\>: `{ [K in keyof T]-?: Object extends Pick<T, K> ? never : K }`\[keyof `T`\]

RequiredKeys

## Desc

Get union type of keys that are required in object type `T`

## See

https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

  // Expect: "req" | "reqUndef"
  type Keys = RequiredKeys<Props>;
```

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:195](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L195)
