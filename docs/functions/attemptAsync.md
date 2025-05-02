[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / attemptAsync

# Function: attemptAsync()

> **attemptAsync**\<`T`\>(`func`, `options?`, ...`args?`): `Promise`\<`any`\>

Defined in: [src/utils/functions/attemptAsync.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/attemptAsync.ts#L10)

## Type Parameters

### T

`T` = `any`

## Parameters

### func

(...`args`) => `T`

### options?

[`AttemptOptions`](../type-aliases/AttemptOptions.md)

### args?

...`any`[]

## Returns

`Promise`\<`any`\>

## Description

Attempts to invoke `func` async, returning either the result or will adjust to the options,
if nothing was passed to the options, it will return nothing

## Example

```ts
await attemptAsync(selector =>
  document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
```
