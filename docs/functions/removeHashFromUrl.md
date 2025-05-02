[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / removeHashFromUrl

# Function: removeHashFromUrl()

> **removeHashFromUrl**(`input`): `string`

Defined in: [src/utils/route/removeHashFromUrl.ts:6](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/route/removeHashFromUrl.ts#L6)

## Parameters

### input

`string`

## Returns

`string`

## Description

It takes a string, finds the first occurrence of the hash character, and returns the string without
the hash character and everything after it.

## Example

```ts
removeHashFromUrl("www.example.com/a#link") => "www.example.com/a"
```
