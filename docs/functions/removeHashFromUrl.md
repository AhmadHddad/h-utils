[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / removeHashFromUrl

# Function: removeHashFromUrl()

> **removeHashFromUrl**(`input`): `string`

## Parameters

• **input**: `string`

## Returns

`string`

## Description

It takes a string, finds the first occurrence of the hash character, and returns the string without
the hash character and everything after it.

## Example

```ts
removeHashFromUrl("www.example.com/a#link") => "www.example.com/a"
```

## Source

[src/utils/route/removeHashFromUrl.ts:6](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/route/removeHashFromUrl.ts#L6)
