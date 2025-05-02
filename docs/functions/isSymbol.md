[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isSymbol

# Function: isSymbol()

> **isSymbol**(`value`): `value is Symbol`

Defined in: [src/utils/validation/isSymbol.ts:17](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isSymbol.ts#L17)

Checks if `value` is classified as a `Symbol` primitive or object.

## Parameters

### value

`unknown`

The value to check.

## Returns

`value is Symbol`

Returns `true` if `value` is a symbol, else `false`.

## Example

```ts
isSymbol(Symbol.iterator)
// => true

isSymbol('abc')
// => false
```
