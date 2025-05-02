[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / extractUrlsFromString

# Function: extractUrlsFromString()

> **extractUrlsFromString**(`str`): \[\] \| `RegExpMatchArray`

Defined in: [src/utils/string/extractUrlsFromString.ts:7](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/string/extractUrlsFromString.ts#L7)

## Parameters

### str

`string`

## Returns

\[\] \| `RegExpMatchArray`

## Description

will extract all urls from a long string and return a list of the urls.

## Example

```ts
"Hello, visit me at www.example.com!" => ["www.example.com"]
```
