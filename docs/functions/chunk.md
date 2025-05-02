[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `T`[][]

Defined in: [src/utils/array/chunk.ts:5](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/array/chunk.ts#L5)

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

### size

`number`

## Returns

`T`[][]

## Description

Takes an array and a chunk size as parameters and returns an array of arrays.

## Example

```ts
chunk(['a', 'b', 'c', 'd'], 2) //[['a', 'b'], ['c', 'd']]
```
