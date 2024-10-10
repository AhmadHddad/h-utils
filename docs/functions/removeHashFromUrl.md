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

[src/utils/route/removeHashFromUrl.ts:6](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/route/removeHashFromUrl.ts#L6)
