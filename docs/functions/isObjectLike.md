[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isObjectLike

# Function: isObjectLike()

> **isObjectLike**(`value`): `value is object`

Checks if `value` is object-like. A value is object-like if it's not `null`
and has a `typeof` result of "object".

## Parameters

• **value**: `any`

## Returns

`value is object`

## Since

4.0.0

## Example

```ts
isObjectLike({}) // true

isObjectLike([1, 2, 3]) // true

isObjectLike(Function) // false

isObjectLike(null) // false
```

## Source

[src/utils/validation/isObjectLike.ts:16](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/validation/isObjectLike.ts#L16)
