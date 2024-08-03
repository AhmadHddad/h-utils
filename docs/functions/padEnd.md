[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / padEnd

# Function: padEnd()

> **padEnd**(`input`, `targetLength`, `padString`): `string`

## Parameters

• **input**: `string`

• **targetLength**: `number`

• **padString**: `string`= `' '`

## Returns

`string`

## Description

function which takes a string of characters and adds a "padding" string of your choice to the end (or right) of the passed string.

## Example

```ts
padEnd("123", 5, '0') // '12300'
```

## Source

[src/utils/string/padEnd.ts:6](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/string/padEnd.ts#L6)
