[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getUrlPathParams

# Function: getUrlPathParams()

> **getUrlPathParams**(`url`, `options?`): `string`[]

Defined in: [src/utils/route/getUrlPathParams.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/route/getUrlPathParams.ts#L10)

## Parameters

### url

`string`

### options?

#### filterEmpty?

`boolean`

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
