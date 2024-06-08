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

[src/utils/functions/attempt.ts:10](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/functions/attempt.ts#L10)
