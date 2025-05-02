[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / excludeQueryParamFromUrl

# Function: excludeQueryParamFromUrl()

> **excludeQueryParamFromUrl**(`urlOrQuery`, `filter`): `string`

Defined in: [src/utils/route/excludeQueryParamFromUrl.ts:8](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/route/excludeQueryParamFromUrl.ts#L8)

## Parameters

### urlOrQuery

`string`

### filter

`string`[] | (`key`, `value`) => `boolean`

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
