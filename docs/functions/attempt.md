[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / attempt

# Function: attempt()

> **attempt**\<`T`\>(`func`, `options`?, ...`args`?): `any`

## Type parameters

• **T** = `any`

## Parameters

• **func**

• **options?**: [`AttemptOptions`](../type-aliases/AttemptOptions.md)

• ...**args?**: `any`[]

## Returns

`any`

## Description

Attempts to invoke `func`, returning either the result or will adjust to the options,
if nothing was passed to the options, it will return nothing

## Example

```ts
attempt(selector =>
  document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
```

## Source

[src/utils/functions/attempt.ts:10](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/attempt.ts#L10)
