[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / padEnd

# Function: padEnd()

> **padEnd**(`input`, `targetLength`, `padString`): `string`

Defined in: [src/utils/string/padEnd.ts:6](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/string/padEnd.ts#L6)

## Parameters

### input

`string`

### targetLength

`number`

### padString

`string` = `' '`

## Returns

`string`

## Description

function which takes a string of characters and adds a "padding" string of your choice to the end (or right) of the passed string.

## Example

```ts
padEnd("123", 5, '0') // '12300'
```
