[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / PromiseType

# Type Alias: PromiseType\<T\>

> **PromiseType**\<`T`\> = `T` *extends* `Promise`\<infer U\> ? `U` : `never`

Defined in: [src/utils/utilityTypes.ts:310](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L310)

PromiseType

## Type Parameters

### T

`T` *extends* `Promise`\<`any`\>

## Desc

Obtain Promise resolve type

## Example

```ts
// Expect: string;
  type Response = PromiseType<Promise<string>>;
```
