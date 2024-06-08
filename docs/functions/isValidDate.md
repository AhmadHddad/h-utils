[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isValidDate

# Function: isValidDate()

> **isValidDate**(`value`): `boolean`

## Parameters

• **value**: `unknown`

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

## Source

[src/utils/validation/isValidDate.ts:9](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isValidDate.ts#L9)
