[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `size`): `T`[][]

## Type parameters

• **T**

## Parameters

• **array**: `T`[]

• **size**: `number`

## Returns

`T`[][]

## Description

Takes an array and a chunk size as parameters and returns an array of arrays.

## Example

```ts
chunk(['a', 'b', 'c', 'd'], 2) //[['a', 'b'], ['c', 'd']]
```

## Source

[src/utils/array/chunk.ts:5](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/array/chunk.ts#L5)
