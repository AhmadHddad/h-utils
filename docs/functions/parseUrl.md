[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / parseUrl

# Function: parseUrl()

> **parseUrl**(`url`, `options?`): [`ParsedUrl`](../type-aliases/ParsedUrl.md)

Defined in: [src/utils/route/parseUrl.ts:19](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/route/parseUrl.ts#L19)

## Parameters

### url

`string`

### options?

[`ParseOptions`](../type-aliases/ParseOptions.md)

## Returns

[`ParsedUrl`](../type-aliases/ParsedUrl.md)

## Description

Extract the URL and the query string as an object.
If the `parseFragmentIdentifier` option is `true`, the object will also contain a `fragmentIdentifier` property.

## Example

```
parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```
