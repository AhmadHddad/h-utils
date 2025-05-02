[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`, `sloppy?`): `value is number`

Defined in: [src/utils/validation/isNumber.ts:7](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isNumber.ts#L7)

## Parameters

### value

`any`

### sloppy?

`boolean`

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
