[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / padStart

# Function: padStart()

> **padStart**(`input`, `targetLength`, `padString`): `string`

## Parameters

• **input**: `string`

• **targetLength**: `number`

• **padString**: `string`= `' '`

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

## Source

[src/utils/string/padStart.ts:18](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/string/padStart.ts#L18)
