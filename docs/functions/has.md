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

[src/utils/object/has.ts:6](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/object/has.ts#L6)
