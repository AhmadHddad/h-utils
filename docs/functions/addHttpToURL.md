[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / addHttpToURL

# Function: addHttpToURL()

> **addHttpToURL**(`url`, `secured`): `string`

Defined in: [src/utils/route/addHttpToURL.ts:11](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/route/addHttpToURL.ts#L11)

## Parameters

### url

`string`

string - the url to check

### secured

`boolean` = `false`

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
