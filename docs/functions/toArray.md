[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / toArray

# Function: toArray()

> **toArray**\<`T`\>(`source`): `T`[]

Defined in: [src/utils/general/toArray.ts:9](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/general/toArray.ts#L9)

## Type Parameters

### T

`T` = `any`

## Parameters

### source

`unknown`

unknown

## Returns

`T`[]

An array.

## Description

If the source is null or undefined, return an empty array, otherwise return the source as an array.

## Examples

```ts
toArray(null) // []
```

```ts
toArray([21]) // [21]
```

```ts
toArray({}) // [{}]
```
