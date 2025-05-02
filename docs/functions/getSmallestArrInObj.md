[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getSmallestArrInObj

# Function: getSmallestArrInObj()

> **getSmallestArrInObj**(`obj`): `object`

Defined in: [src/utils/object/getSmallestArrInObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/object/getSmallestArrInObj.ts#L6)

## Parameters

### obj

\{ \} | `Record`\<`string`, `any`[]\>

## Returns

`object`

## Description

will return the smallest array in record or object

## Example

```ts
getSmallestArrInObj({a:[1,2,3], b:[1,2,3,4,5]}) => {a:[1,2,3]}
```
