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
const consumer = (value: boolean | Falsy) => {
    if (!value) {
        return ;
    }
    type newType = typeof value; // === true
    // do stuff
  };
```

## Source

[src/utils/validation/isFalsy.ts:17](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isFalsy.ts#L17)
