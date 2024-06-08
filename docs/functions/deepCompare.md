[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / deepCompare

# Function: deepCompare()

> **deepCompare**\<`T`\>(...`args`): `boolean`

## Type parameters

• **T** = `any`

## Parameters

• ...**args**: `T`[]

## Returns

`boolean`

## Description

It compares two arguments and returns true if they are equal, false if they are not

## Examples

```ts
deepCompareObjects({a:1}, {a:1}) // true
```

```ts
deepCompareObjects([1,2,3], [1,2,3]) // true
```

```ts
deepCompareObjects([1,2,3], [1,2,5]) // false
```

```ts
deepCompareObjects(true ,false) // false
```

## Source

[src/utils/object/deepCompare.ts:8](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/object/deepCompare.ts#L8)
