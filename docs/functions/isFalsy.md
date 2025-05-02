[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isFalsy

# Function: isFalsy()

> **isFalsy**(`val`): `val is Falsy`

Defined in: [src/utils/validation/isFalsy.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isFalsy.ts#L10)

Tests for Falsy by simply applying negation `!` to the tested `val`.

The value is mostly in added type-information and explicity,
but in case of this simple type much the same can often be archived by just using negation `!`:

## Parameters

### val

`unknown`

## Returns

`val is Falsy`

## Example

```ts
isFalsy("") // true
```
