[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / toArray

# Function: toArray()

> **toArray**(`source`): `any`[]

## Parameters

• **source**: `unknown`

unknown

## Returns

`any`[]

An array.

## Description

If the source is null or undefined, return an empty array, otherwise return the source as an array.

## Examples

```ts
toArray(null) // []
```

```ts
toArray([21]) // [21]
```

```ts
toArray({}) // [{}]
```

## Source

[src/utils/general/toArray.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/general/toArray.ts#L10)
