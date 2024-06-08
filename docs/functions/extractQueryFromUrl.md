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

[src/utils/route/extractQueryFromUrl.ts:9](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/route/extractQueryFromUrl.ts#L9)
