[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / stringToHslColor

# Function: stringToHslColor()

> **stringToHslColor**(`string`, `saturation`?, `lightness`?): `string`

## Parameters

• **string**: `string`

The string to convert to a color.

• **saturation?**: `number`= `100`

0-100

• **lightness?**: `number`= `75`

0-100

## Returns

`string`

A string of the form `hsl(0, 100%, 75%)`

## Description

It takes a string, converts it to a number, and then uses that number to generate a color.

The function is based on the [HSL color model](https://en.wikipedia.org/wiki/HSL_and_HSV).

The function takes three arguments:

- `string`: The string to convert to a color.
- `saturation`: The saturation of the color.
- `lightness`: The lightness of the color.

The function returns a string in the format `hsl(hue, saturation, lightness)`.

The function uses the [Fowler–Noll–Vo hash
function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) to convert the
string to a

## Source

[src/utils/string/stringToHslColor.ts:22](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/string/stringToHslColor.ts#L22)
