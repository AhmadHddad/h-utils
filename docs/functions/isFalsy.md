[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isFalsy

# Function: isFalsy()

> **isFalsy**(`val`): `val is Falsy`

Tests for Falsy by simply applying negation `!` to the tested `val`.

The value is mostly in added type-information and explicity,
but in case of this simple type much the same can often be archived by just using negation `!`:

## Parameters

• **val**: `unknown`

## Returns

`val is Falsy`

## Example

```ts
isFalsy("") // true
```

## Source

[src/utils/validation/isFalsy.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isFalsy.ts#L10)
