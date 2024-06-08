[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isSymbol

# Function: isSymbol()

> **isSymbol**(`value`): `value is Symbol`

Checks if `value` is classified as a `Symbol` primitive or object.

## Parameters

• **value**: `unknown`

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

## Source

[src/utils/validation/isSymbol.ts:17](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isSymbol.ts#L17)
