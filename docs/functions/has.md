[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / has

# Function: has()

> **has**(`objectType`, `key`): `boolean`

## Parameters

• **objectType**: `object` \| `Function` \| []

• **key**: `string`

## Returns

`boolean`

## Description

Shortcut function for checking if an object has a given property directly on itself.

## Example

```ts
has({a:1, b:2}, ["a"]) => true
```

## Source

[src/utils/object/has.ts:6](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/object/has.ts#L6)
