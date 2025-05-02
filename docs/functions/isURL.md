[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isURL

# Function: isURL()

> **isURL**(`input`, `tryUrlObj?`): `boolean`

Defined in: [src/utils/validation/isURL.ts:10](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isURL.ts#L10)

## Parameters

### input

`string`

### tryUrlObj?

`boolean`

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
