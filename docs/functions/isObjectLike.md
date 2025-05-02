[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isObjectLike

# Function: isObjectLike()

> **isObjectLike**(`value`): `value is object`

Defined in: [src/utils/validation/isObjectLike.ts:16](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isObjectLike.ts#L16)

Checks if `value` is object-like. A value is object-like if it's not `null`
and has a `typeof` result of "object".

## Parameters

### value

`any`

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
