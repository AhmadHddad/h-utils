[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getNumberFromString

# Function: getNumberFromString()

> **getNumberFromString**(`strOrNum`): `number`

Defined in: [src/utils/string/getNumberFromString.ts:12](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/string/getNumberFromString.ts#L12)

## Parameters

### strOrNum

[`Key`](../type-aliases/Key.md)

string | number

## Returns

`number`

## Description

Takes the number out of the string and returns number
if no number exists will return infinity

## Examples

```ts
getNumberFromString("3.35px") => 3.35;
```

```ts
getNumberFromString("3.35") => 3.35;
```

```ts
getNumberFromString("string") => infinity;
```
