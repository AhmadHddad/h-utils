[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getUrlPathParams

# Function: getUrlPathParams()

> **getUrlPathParams**(`url`, `options`?): `string`[]

## Parameters

• **url**: `string`

• **options?**

• **options.filterEmpty?**: `boolean`

## Returns

`string`[]

## Description

will return the url params of the passed Url

## Examples

```ts
getUrlPathParams("www.example.com/1/2", {filterEmpty:true}) // ["1", "2"]
```

```ts
getUrlPathParams("www.example.com/1/2", {filterEmpty:false}) // ["", "1", "2"]
```

## Source

[src/utils/route/getUrlPathParams.ts:10](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/route/getUrlPathParams.ts#L10)
