[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / parseString

# Function: parseString()

> **parseString**\<`T`\>(`str`, `config`?): `T`

## Type parameters

• **T** = `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `object` \| []

## Parameters

• **str**: `undefined` \| `null` \| `string` \| `number`

• **config?**: [`ParseStringOptions`](../type-aliases/ParseStringOptions.md)

## Returns

`T`

## Description

It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
and returns the actual type.
if "123" will return the number 123 and so on.

## Source

[src/utils/string/parseString.ts:8](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/string/parseString.ts#L8)
