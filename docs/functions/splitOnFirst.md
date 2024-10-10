[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / splitOnFirst

# Function: splitOnFirst()

> **splitOnFirst**(`string`, `separator`): `string`[]

## Parameters

• **string**: `string`

string

• **separator**: `string`

The separator to split on.

## Returns

`string`[]

## Description

It takes a string and a separator and returns an array of two strings, the first being the string up
to the separator and the second being the string after the separator.

## Example

```ts
splitOnFirst('key:value:value2', ':') // ['key', 'value:value2']
```

## Source

[src/utils/string/splitOnFirst.ts:8](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/string/splitOnFirst.ts#L8)
