[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isValidDate

# Function: isValidDate()

> **isValidDate**(`value`): `boolean`

Defined in: [src/utils/validation/isValidDate.ts:9](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isValidDate.ts#L9)

## Parameters

### value

`unknown`

## Returns

`boolean`

## Description

Will check if the passed param is a valid date;

## Examples

```ts
isValidDate("10/10/2010") // true;
```

```ts
isValidDate("2010") // true;
```

```ts
isValidDate("123") // false;
```
