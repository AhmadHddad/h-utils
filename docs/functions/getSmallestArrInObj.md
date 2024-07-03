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

[src/utils/object/getSmallestArrInObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/object/getSmallestArrInObj.ts#L6)
