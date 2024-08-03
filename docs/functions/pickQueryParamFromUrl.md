[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / pickQueryParamFromUrl

# Function: pickQueryParamFromUrl()

> **pickQueryParamFromUrl**(`urlOrQuery`, `filter`): `string`

## Parameters

• **urlOrQuery**: `string`

• **filter**: [`KeysArr`](../type-aliases/KeysArr.md) \| [`PredicateFunc`](../type-aliases/PredicateFunc.md)\<`any`\>

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

## Source

[src/utils/route/pickQueryParamFromUrl.ts:11](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/route/pickQueryParamFromUrl.ts#L11)
