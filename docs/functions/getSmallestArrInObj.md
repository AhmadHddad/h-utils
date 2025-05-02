[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getSmallestArrInObj

# Function: getSmallestArrInObj()

> **getSmallestArrInObj**(`obj`): `object`

Defined in: [src/utils/object/getSmallestArrInObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/object/getSmallestArrInObj.ts#L6)

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
