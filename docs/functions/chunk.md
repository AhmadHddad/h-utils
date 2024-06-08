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

[src/utils/array/chunk.ts:5](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/array/chunk.ts#L5)
