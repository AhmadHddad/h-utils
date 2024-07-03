[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`, `sloppy`?): `value is number`

## Parameters

• **value**: `any`

• **sloppy?**: `boolean`

## Returns

`value is number`

## Description

If the value is not a number, then it is not a number.

## Examples

```ts
isNumber("123") => false;
```

```ts
isNumber("123", true) => false;
```

```ts
isNumber(1, true) => true;
```

## Source

[src/utils/validation/isNumber.ts:7](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/validation/isNumber.ts#L7)
