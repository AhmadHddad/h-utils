[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / conditionalReturn

# Function: conditionalReturn()

> **conditionalReturn**\<`V1`, `V2`\>(`condition`, `val1`, `val2`?): `V1` \| `V2` \| `undefined`

If the condition is true, return val1, otherwise return val2.

## Type parameters

• **V1** = `any`

• **V2** = `undefined`

## Parameters

• **condition**: `boolean`

boolean

• **val1**: `V1`

The value to return if the condition is true

• **val2?**: `V2`

The value to return if the condition is false.

## Returns

`V1` \| `V2` \| `undefined`

## Example

```ts
conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
```

## Source

[src/utils/general/conditionalReturn.ts:8](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/general/conditionalReturn.ts#L8)
