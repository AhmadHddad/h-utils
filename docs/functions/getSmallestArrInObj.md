[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getSmallestArrInObj

# Function: getSmallestArrInObj()

> **getSmallestArrInObj**(`obj`): `object`

## Parameters

• **obj**: `object` \| `Record`\<`string`, `any`[]\>

## Returns

`object`

## Description

will return the smallest array in record or object

## Example

```ts
getSmallestArrInObj({a:[1,2,3], b:[1,2,3,4,5]}) => {a:[1,2,3]}
```

## Source

[src/utils/object/getSmallestArrInObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/object/getSmallestArrInObj.ts#L6)
