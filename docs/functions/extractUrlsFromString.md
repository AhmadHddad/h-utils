[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / extractUrlsFromString

# Function: extractUrlsFromString()

> **extractUrlsFromString**(`str`): \[\] \| `RegExpMatchArray`

Defined in: [src/utils/string/extractUrlsFromString.ts:7](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/string/extractUrlsFromString.ts#L7)

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
