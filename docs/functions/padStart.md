[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / padStart

# Function: padStart()

> **padStart**(`input`, `targetLength`, `padString`): `string`

Defined in: [src/utils/string/padStart.ts:18](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/string/padStart.ts#L18)

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

function which takes a string of characters and adds a "padding" string of your choice to the start (or left) of the passed string.
 *

## Example

```ts
*  
padStart('foo', 5)
// => "  foo"
 
padStart('foobar', 6)
// => "foobar"
 
padStart(1, 2, '0')
// => "01"
 
padStart(17, 5, 0)
// => "00017"
```
