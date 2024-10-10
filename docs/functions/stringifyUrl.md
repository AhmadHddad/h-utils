[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / stringifyUrl

# Function: stringifyUrl()

> **stringifyUrl**(`object`, `options`?): `string`

## Parameters

• **object**: [`UrlObject`](../type-aliases/UrlObject.md)

• **options?**: [`StringifyOptions`](../type-aliases/StringifyOptions.md)

## Returns

`string`

## Description

Stringify an object into a URL with a query string and sorting the keys. The inverse of .parseUrl();

## Example

```
stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

stringifyUrl({
   url: 'https://foo.bar',
   query: {
       top: 'foo'
   },
   fragmentIdentifier: 'bar'
});
//=> 'https://foo.bar?top=foo#bar'

stringifyUrl({
   url: 'https://foo.bar',
   params: [1,"foo"]
}); //=> 'https://foo.bar/1/foo
```

## Source

[src/utils/route/stringifyUrl.ts:32](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/route/stringifyUrl.ts#L32)
