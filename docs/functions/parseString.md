[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / parseString

# Function: parseString()

> **parseString**\<`T`\>(`str`, `config?`): `T`

Defined in: [src/utils/string/parseString.ts:8](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/string/parseString.ts#L8)

## Type Parameters

### T

`T` = `string` \| `number` \| `boolean` \| \{ \} \| \[\]

## Parameters

### str

`string` | `number`

### config?

[`ParseStringOptions`](../type-aliases/ParseStringOptions.md)

## Returns

`T`

## Description

It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
and returns the actual type.
if "123" will return the number 123 and so on.
