[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / stringHas

# Function: stringHas()

> **stringHas**(`string`, `valArr`): `boolean`

## Parameters

• **string**: `string`

• **valArr**: `string`[]= `[]`

## Returns

`boolean`

## Description

returns true if a string has one of the passed string values.

## Examples

```ts
stringHas("www.google.com", ["google", "www"]) // true
```

```ts
stringHas("www.google.com", ["google"]) // true
```

```ts
stringHas("www.google.com", ["no"]) // false
```

```ts
stringHas("www.google.com", ["no", "com"]) // true
```

## Source

[src/utils/string/stringHas.ts:12](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/string/stringHas.ts#L12)
