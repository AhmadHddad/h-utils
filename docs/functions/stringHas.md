[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / stringHas

# Function: stringHas()

> **stringHas**(`string`, `valArr`): `boolean`

Defined in: [src/utils/string/stringHas.ts:12](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/string/stringHas.ts#L12)

## Parameters

### string

`string`

### valArr

`string`[] = `[]`

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
