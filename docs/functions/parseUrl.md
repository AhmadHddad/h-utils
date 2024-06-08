[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / parseUrl

# Function: parseUrl()

> **parseUrl**(`url`, `options`?): [`ParsedUrl`](../type-aliases/ParsedUrl.md)

## Parameters

• **url**: `string`

• **options?**: [`ParseOptions`](../type-aliases/ParseOptions.md)

## Returns

[`ParsedUrl`](../type-aliases/ParsedUrl.md)

## Description

Extract the URL and the query string as an object.
If the `parseFragmentIdentifier` option is `true`, the object will also contain a `fragmentIdentifier` property.

## Example

```
import queryString from 'query-string';

queryString.parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

## Source

[src/utils/route/parseUrl.ts:21](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/route/parseUrl.ts#L21)
