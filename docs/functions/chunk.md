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

[src/utils/array/chunk.ts:5](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/array/chunk.ts#L5)
