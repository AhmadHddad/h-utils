[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / PAwaited

# Type alias: PAwaited\<T\>

> **PAwaited**\<`T`\>: `T` *extends* `null` \| `undefined` ? `T` : `T` *extends* `object` & `object` ? `F` *extends* (`value`, ...`args`) => `any` ? `Awaited`\<`V`\> : `never` : `T`

Recursively unwraps the "awaited type" of a type. 
  Non-promise "thenables" should resolve to `never`. 
  This emulates the behavior of `await`.

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:28](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/utilityTypes.ts#L28)
