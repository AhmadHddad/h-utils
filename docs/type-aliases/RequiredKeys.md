[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / RequiredKeys

# Type Alias: RequiredKeys\<T\>

> **RequiredKeys**\<`T`\> = `{ [K in keyof T]-?: {} extends Pick<T, K> ? never : K }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:195](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L195)

RequiredKeys

## Type Parameters

### T

`T`

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
