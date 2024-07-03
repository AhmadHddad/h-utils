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

[src/utils/route/removeHashFromUrl.ts:6](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/route/removeHashFromUrl.ts#L6)
