[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / extractQueryFromUrl

# Function: extractQueryFromUrl()

> **extractQueryFromUrl**(`input`): `string`

## Parameters

• **input**: `string`

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

## Source

[src/utils/route/extractQueryFromUrl.ts:9](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/route/extractQueryFromUrl.ts#L9)
