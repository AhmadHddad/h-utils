[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / extractUrlsFromString

# Function: extractUrlsFromString()

> **extractUrlsFromString**(`str`): `RegExpMatchArray` \| []

## Parameters

• **str**: `string`

## Returns

`RegExpMatchArray` \| []

## Description

will extract all urls from a long string and return a list of the urls.

## Example

```ts
"Hello, visit me at www.example.com!" => ["www.example.com"]
```

## Source

[src/utils/string/extractUrlsFromString.ts:7](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/string/extractUrlsFromString.ts#L7)
