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

[src/utils/string/splitOnFirst.ts:8](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/string/splitOnFirst.ts#L8)
