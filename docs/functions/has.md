[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / has

# Function: has()

> **has**\<`T`\>(`objectType`, `key`): `boolean`

## Type parameters

• **T** *extends* `Record`\<`any`, `any`\>

## Parameters

• **objectType**: `T`

• **key**: `string`

## Returns

`boolean`

## Description

Shortcut function for checking if an object has a given property directly on itself.

## Example

```ts
has({a:1, b:2}, "a") => true
```

## Source

[src/utils/object/has.ts:6](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/object/has.ts#L6)
