[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / extractQueryFromUrl

# Function: extractQueryFromUrl()

> **extractQueryFromUrl**(`input`): `string`

Defined in: [src/utils/route/extractQueryFromUrl.ts:9](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/route/extractQueryFromUrl.ts#L9)

## Parameters

### input

`string`

The URL to extract the query from.

## Returns

`string`

The query string from the URL.

## Description

It takes a URL and returns the query string

## Example

```ts
extractQueryFromUrl("https://www.youtube.com/watch?v=ABCD#anchor") => "v=ABCD"
```
