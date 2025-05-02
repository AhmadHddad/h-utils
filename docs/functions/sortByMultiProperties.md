[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / sortByMultiProperties

# Function: sortByMultiProperties()

> **sortByMultiProperties**\<`T`\>(`arr`, `proprieties`): `T`[]

Defined in: [src/utils/array/sortByMultiProperties.ts:7](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/array/sortByMultiProperties.ts#L7)

## Type Parameters

### T

`T` = \{ \}

## Parameters

### arr

`T`[]

the array to be sorted

### proprieties

`string`[]

an array of strings, each string is a property name

## Returns

`T`[]

## Description

It takes an array of objects and sorts them by array of multiple properties.
if the property starts with "-" then it will be descending order otherwize ascending order
