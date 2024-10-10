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

[src/utils/validation/isValidDate.ts:9](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isValidDate.ts#L9)
