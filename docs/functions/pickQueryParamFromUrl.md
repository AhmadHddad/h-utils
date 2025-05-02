[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / pickQueryParamFromUrl

# Function: pickQueryParamFromUrl()

> **pickQueryParamFromUrl**(`urlOrQuery`, `filter`): `string`

Defined in: [src/utils/route/pickQueryParamFromUrl.ts:11](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/route/pickQueryParamFromUrl.ts#L11)

## Parameters

### urlOrQuery

`string`

### filter

[`KeysArr`](../type-aliases/KeysArr.md) | [`PredicateFunc`](../type-aliases/PredicateFunc.md)\<`any`\>

## Returns

`string`

## Description

Pick query parameters from a URL.

## Examples

```ts
pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); // 'https://foo.bar?foo=1#hello';
```

```ts
pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); // 'https://foo.bar?bar=2#hello';
```
