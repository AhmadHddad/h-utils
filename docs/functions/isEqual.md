[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isEqual

# Function: isEqual()

> **isEqual**(`value`, `other`, `ignoreType`): `boolean`

Performs a
[`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
comparison between two values to determine if they are equivalent.

## Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

The other value to compare.

• **ignoreType**: `boolean`

## Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

## Since

4.0.0

## Example

```ts
isEqual("1", 1, true) // true
isEqual("1", 1) // false

const object = { 'a': 1 }
const other = { 'a': 1 }

isEqual(object, object) // true

isEqual(object, other) // false

isEqual('a', 'a') // true

isEqual('a', Object('a')) // false;

isEqual(NaN, NaN) // true
```

## Source

[src/utils/validation/isEqual.ts:31](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/validation/isEqual.ts#L31)
