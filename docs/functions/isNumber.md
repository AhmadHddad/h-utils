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
isNumber("123", true) => true;
```

```ts
isNumber(1, true) => true;
```

## Source

[src/utils/validation/isNumber.ts:7](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isNumber.ts#L7)
