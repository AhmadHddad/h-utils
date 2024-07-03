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

[src/utils/utilityTypes.ts:28](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L28)
