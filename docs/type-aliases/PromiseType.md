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

[src/utils/utilityTypes.ts:310](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L310)
