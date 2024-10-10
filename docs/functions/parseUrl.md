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
parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

## Source

[src/utils/route/parseUrl.ts:19](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/route/parseUrl.ts#L19)
