[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / has

# Function: has()

> **has**\<`T`\>(`objectType`, `key`): `boolean`

Defined in: [src/utils/object/has.ts:6](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/object/has.ts#L6)

## Type Parameters

### T

`T` *extends* `Record`\<`any`, `any`\>

## Parameters

### objectType

`T`

### key

`string`

## Returns

`boolean`

## Description

Shortcut function for checking if an object has a given property directly on itself.

## Example

```ts
has({a:1, b:2}, "a") => true
```
