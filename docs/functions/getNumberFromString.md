[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getNumberFromString

# Function: getNumberFromString()

> **getNumberFromString**(`strOrNum`): `number`

## Parameters

• **strOrNum**: [`Key`](../type-aliases/Key.md)

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

## Source

[src/utils/string/getNumberFromString.ts:12](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/string/getNumberFromString.ts#L12)
