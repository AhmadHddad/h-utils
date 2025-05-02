[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / PAwaited

# Type Alias: PAwaited\<T\>

> **PAwaited**\<`T`\> = `T` *extends* `null` \| `undefined` ? `T` : `T` *extends* `object` & `object` ? `F` *extends* (`value`, ...`args`) => `any` ? `Awaited`\<`V`\> : `never` : `T`

Defined in: [src/utils/utilityTypes.ts:28](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L28)

Recursively unwraps the "awaited type" of a type. 
  Non-promise "thenables" should resolve to `never`. 
  This emulates the behavior of `await`.

## Type Parameters

### T

`T`
