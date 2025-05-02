[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / sortByMultiProperties

# Function: sortByMultiProperties()

> **sortByMultiProperties**\<`T`\>(`arr`, `proprieties`): `T`[]

Defined in: [src/utils/array/sortByMultiProperties.ts:7](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/array/sortByMultiProperties.ts#L7)

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
