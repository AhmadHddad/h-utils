[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / conditionalReturn

# Function: conditionalReturn()

> **conditionalReturn**\<`V1`, `V2`\>(`condition`, `val1`, `val2?`): `V1` \| `V2`

Defined in: [src/utils/general/conditionalReturn.ts:8](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/general/conditionalReturn.ts#L8)

If the condition is true, return val1, otherwise return val2.

## Type Parameters

### V1

`V1` = `any`

### V2

`V2` = `undefined`

## Parameters

### condition

`boolean`

boolean

### val1

`V1`

The value to return if the condition is true

### val2?

`V2`

The value to return if the condition is false.

## Returns

`V1` \| `V2`

## Example

```ts
conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
```
