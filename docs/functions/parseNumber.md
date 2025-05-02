[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / parseNumber

# Function: parseNumber()

> **parseNumber**(`number`): `number`

Defined in: [src/utils/string/parseNumber.ts:9](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/string/parseNumber.ts#L9)

It takes a string, removes all non-numeric characters, and returns the result

## Parameters

### number

string - The string to be parsed.

`string` | `number`

## Returns

`number`

A function that takes a string and returns a string with all non-digit characters removed.

## Example

```ts
parseNumber("123 ") => 123
```
