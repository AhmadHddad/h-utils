[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / excludeQueryParamFromUrl

# Function: excludeQueryParamFromUrl()

> **excludeQueryParamFromUrl**(`urlOrQuery`, `filter`): `string`

## Parameters

• **urlOrQuery**: `string`

• **filter**: `string`[] \| (`key`, `value`) => `boolean`

## Returns

`string`

## Description

Exclude query parameters from a URL.

## Examples

```ts
excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); => 'https://foo.bar?bar=2#hello'
```

```ts
excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); => 'https://foo.bar?foo=1#hello'
```

## Source

[src/utils/route/excludeQueryParamFromUrl.ts:8](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/route/excludeQueryParamFromUrl.ts#L8)
