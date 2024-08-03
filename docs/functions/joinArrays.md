[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / joinArrays

# Function: joinArrays()

> **joinArrays**\<`T`\>(...`args`): `T`[]

## Type parameters

• **T**

## Parameters

• ...**args**: (`undefined` \| `null` \| `T`[])[]

## Returns

`T`[]

## Description

will join all of the passed arrays to one single array, if the passed item is not an array it WILL NOT Add it.

## Example

```ts
joinArrays([1,2,3], [4,5,6], null ,undefined, "hello") // [1,2,3,4,5,6]
```

## Source

[src/utils/array/joinArrays.ts:8](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/array/joinArrays.ts#L8)
