[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / deepCompare

# Function: deepCompare()

> **deepCompare**\<`T`\>(...`args`): `boolean`

Defined in: [src/utils/object/deepCompare.ts:8](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/object/deepCompare.ts#L8)

## Type Parameters

### T

`T` = `any`

## Parameters

### args

...`T`[]

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
