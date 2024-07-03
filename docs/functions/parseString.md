[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / parseString

# Function: parseString()

> **parseString**(`str`, `config`?): `number` \| `undefined` \| `null` \| `string` \| `boolean` \| [] \| `object`

## Parameters

• **str**: `undefined` \| `null` \| `string` \| `number`

• **config?**: [`ParseStringOptions`](../type-aliases/ParseStringOptions.md)

## Returns

`number` \| `undefined` \| `null` \| `string` \| `boolean` \| [] \| `object`

## Description

It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
and returns the actual type.
if "123" will return the number 123 and so on.

## Source

[src/utils/string/parseString.ts:8](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/string/parseString.ts#L8)
