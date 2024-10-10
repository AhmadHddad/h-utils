[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isURL

# Function: isURL()

> **isURL**(`input`, `tryUrlObj`?): `boolean`

## Parameters

• **input**: `string`

• **tryUrlObj?**: `boolean`

## Returns

`boolean`

## Description

will check if the passed input is a valid url, if tryUrlObj will try to create a URL object
if it was successful will return true, otherwise will return the result of the regex result.

## Examples

```ts
isURL("www.google.com") // true
```

```ts
isURL("www.google.com", true) // false
```

## Source

[src/utils/validation/isURL.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isURL.ts#L10)
