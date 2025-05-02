[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / attempt

# Function: attempt()

> **attempt**\<`T`\>(`func`, `options?`, ...`args?`): `any`

Defined in: [src/utils/functions/attempt.ts:10](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/attempt.ts#L10)

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

`any`

## Description

Attempts to invoke `func`, returning either the result or will adjust to the options,
if nothing was passed to the options, it will return nothing

## Example

```ts
attempt(selector =>
  document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
```
