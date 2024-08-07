[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / attemptAsync

# Function: attemptAsync()

> **attemptAsync**\<`T`\>(`func`, `options`?, ...`args`?): `Promise`\<`any`\>

## Type parameters

• **T** = `any`

## Parameters

• **func**

• **options?**: [`AttemptOptions`](../type-aliases/AttemptOptions.md)

• ...**args?**: `any`[]

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

## Source

[src/utils/functions/attemptAsync.ts:10](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/attemptAsync.ts#L10)
