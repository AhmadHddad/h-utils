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

[src/utils/string/stringToPath.ts:5](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/string/stringToPath.ts#L5)
