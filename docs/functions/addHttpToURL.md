[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / addHttpToURL

# Function: addHttpToURL()

> **addHttpToURL**(`url`, `secured`): `string`

## Parameters

• **url**: `string`

string - the url to check

• **secured**: `boolean`= `false`

https instead of http

## Returns

`string`

## Description

If the url doesn't contain http, add it to the url, otherwise return the url.

## Examples

```ts
addHttpToURL("www.google.com") => "http://www.google.com"
```

```ts
addHttpToURL("www.google.com", true) => "https://www.google.com"
```

## Source

[src/utils/route/addHttpToURL.ts:11](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/route/addHttpToURL.ts#L11)
