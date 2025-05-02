[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / toArray

# Function: toArray()

> **toArray**\<`T`\>(`source`): `T`[]

Defined in: [src/utils/general/toArray.ts:9](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/general/toArray.ts#L9)

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
