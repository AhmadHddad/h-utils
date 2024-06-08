[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / mergeSort

# Function: mergeSort()

> **mergeSort**\<`T`\>(`arr`): `T`[]

## Type parameters

• **T** *extends* [`StringOrNumber`](../type-aliases/StringOrNumber.md)

## Parameters

• **arr**: `T`[]

## Returns

`T`[]

## Description

an implementation for mergeSort algorithm, it will sort an array of numbers or strings.

## Example

```ts
const arrayToSort = [3, 1,-1, 0,  4, 1, 5, 9, 2, 6, 5, 3, 5];
    mergeSort(arrayToSort)  // [ -1, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9 ];
```

## Source

[src/utils/array/mergeSort.ts:12](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/array/mergeSort.ts#L12)
