[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isURL

# Function: isURL()

> **isURL**(`input`, `tryUrlObj?`): `boolean`

Defined in: [src/utils/validation/isURL.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isURL.ts#L10)

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
