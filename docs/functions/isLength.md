[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isLength

# Function: isLength()

> **isLength**(`input?`): `boolean`

Defined in: [src/utils/validation/isLength.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isLength.ts#L10)

## Parameters

### input?

`any`

## Returns

`boolean`

A function that takes an unknown type and returns a boolean.

## Description

It returns true if the object or array is not empty, false otherwise

## Examples

```ts
isLength([1,2]) => true
```

```ts
isLength([]) => false
```

```ts
isLength(null) => false
```
