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

[src/utils/object/has.ts:6](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/object/has.ts#L6)
