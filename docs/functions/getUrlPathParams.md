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

[src/utils/route/getUrlPathParams.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/route/getUrlPathParams.ts#L10)
