[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / sortArr

# Function: sortArr()

> **sortArr**\<`T`\>(`arr`, `options?`): `T`[]

Defined in: [src/utils/array/sortArr.ts:19](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/array/sortArr.ts#L19)

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

### options?

`SortArrOptions`\<`T`\>

## Returns

`T`[]

## Description

It sorts an array of objects or strings or numbers, and if the array is an array of objects, it can
sort by a key of the objects.

## Examples

```ts
sortArr([4,2,1]) // [1,2,4]
```

```ts
sortArr([{a:2}, {a:1}], {key:"a"}) // [{a:1}, {a:2}]
```

```ts
sortArr([{a:2}, {a:1}], {getValue:(v) => v.a}) // [{a:1}, {a:2}]
```
