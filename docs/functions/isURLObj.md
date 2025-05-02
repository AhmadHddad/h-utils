[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isURLObj

# Function: isURLObj()

> **isURLObj**(`url`): `boolean`

Defined in: [src/utils/validation/isURLObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isURLObj.ts#L6)

## Parameters

### url

`URL`

## Returns

`boolean`

## Description

will check if the passed url is instance of URL.

## Examples

```ts
isURLObj("www.google.com") // false
```

```ts
isURLObj(new URL("https://google.com")) // true
```
