[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isLength

# Function: isLength()

> **isLength**(`input`?): `boolean`

## Parameters

• **input?**: `any`

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

## Source

[src/utils/validation/isLength.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isLength.ts#L10)
