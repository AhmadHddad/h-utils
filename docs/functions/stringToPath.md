[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / stringToPath

# Function: stringToPath()

> **stringToPath**(`path`): `string`[]

## Parameters

• **path**: `string`

## Returns

`string`[]

## Description

will convert passed path string into object path for navigation

## Example

```ts
stringToPath("a.b.c[0]") => ["a", "b", "c", "0"]
```

## Source

[src/utils/string/stringToPath.ts:5](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/string/stringToPath.ts#L5)
