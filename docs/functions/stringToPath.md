[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / stringToPath

# Function: stringToPath()

> **stringToPath**(`path`): `string`[]

Defined in: [src/utils/string/stringToPath.ts:5](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/string/stringToPath.ts#L5)

## Parameters

### path

`string`

## Returns

`string`[]

## Description

will convert passed path string into object path for navigation

## Example

```ts
stringToPath("a.b.c[0]") => ["a", "b", "c", "0"]
```
