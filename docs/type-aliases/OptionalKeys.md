[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / OptionalKeys

# Type alias: OptionalKeys\<T\>

> **OptionalKeys**\<`T`\>: `{ [K in keyof T]-?: Object extends Pick<T, K> ? K : never }`\[keyof `T`\]

OptionalKeys

## Desc

Get union type of keys that are optional in object type `T`

## See

https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object

## Example

```ts
type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };

  // Expect: "opt" | "optUndef"
  type Keys = OptionalKeys<Props>;
```

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:209](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L209)
