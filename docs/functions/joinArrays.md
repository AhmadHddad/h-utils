[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / joinArrays

# Function: joinArrays()

> **joinArrays**\<`T`\>(...`args`): `T`[]

Defined in: [src/utils/array/joinArrays.ts:8](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/array/joinArrays.ts#L8)

## Type Parameters

### T

`T`

## Parameters

### args

...`T`[][]

## Returns

`T`[]

## Description

will join all of the passed arrays to one single array, if the passed item is not an array it WILL NOT Add it.

## Example

```ts
joinArrays([1,2,3], [4,5,6], null ,undefined, "hello") // [1,2,3,4,5,6]
```
