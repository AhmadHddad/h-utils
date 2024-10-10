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

[src/utils/validation/isSymbol.ts:17](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isSymbol.ts#L17)
