[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / replaceAtIndex

# Function: replaceAtIndex()

> **replaceAtIndex**\<`T`\>(`arr`, `index`, `newValue`): `T`[]

Defined in: [src/utils/array/replaceAtIndex.ts:9](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/array/replaceAtIndex.ts#L9)

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

### index

`number`

### newValue

`T`

## Returns

`T`[]

## Description

Creates a new array by replacing the element at a specified index with a given value, and returns the new modified array.

## Example

```ts
replaceAtIndex([1, 2, 3, 4, 5], 2, 10) // [1, 2, 10, 4, 5];
```
