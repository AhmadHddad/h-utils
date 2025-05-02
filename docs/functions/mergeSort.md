[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / mergeSort

# Function: mergeSort()

> **mergeSort**\<`T`\>(`arr`): `T`[]

Defined in: [src/utils/array/mergeSort.ts:12](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/array/mergeSort.ts#L12)

## Type Parameters

### T

`T` *extends* [`StringOrNumber`](../type-aliases/StringOrNumber.md)

## Parameters

### arr

`T`[]

## Returns

`T`[]

## Description

an implementation for mergeSort algorithm, it will sort an array of numbers or strings.

## Example

```ts
const arrayToSort = [3, 1,-1, 0,  4, 1, 5, 9, 2, 6, 5, 3, 5];
    mergeSort(arrayToSort)  // [ -1, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 ];
```
