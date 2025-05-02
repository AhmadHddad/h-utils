[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / addHttpToURL

# Function: addHttpToURL()

> **addHttpToURL**(`url`, `secured`): `string`

Defined in: [src/utils/route/addHttpToURL.ts:11](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/route/addHttpToURL.ts#L11)

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
