[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / PromiseType

# Type alias: PromiseType\<T\>

> **PromiseType**\<`T`\>: `T` *extends* `Promise`\<infer U\> ? `U` : `never`

PromiseType

## Desc

Obtain Promise resolve type

## Example

```ts
// Expect: string;
  type Response = PromiseType<Promise<string>>;
```

## Type parameters

• **T** *extends* `Promise`\<`any`\>

## Source

[src/utils/utilityTypes.ts:310](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L310)
