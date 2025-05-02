[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / addAndOrConjunctionsToStrArray

# Function: addAndOrConjunctionsToStrArray()

> **addAndOrConjunctionsToStrArray**(`stringArray`): `string`

Defined in: [src/utils/string/addAndOrConjunctionsToStrArray.ts:10](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/string/addAndOrConjunctionsToStrArray.ts#L10)

## Parameters

### stringArray

`string`[]

string[]

## Returns

`string`

A string

## Description

It takes an array of strings and returns a string with "And", "Or", "," in the sentance depending on their position.

## Examples

```ts
["Car", "Laptop", "Home"]=> Car, Laptop and Home.
```

```ts
["Car", "Laptop", "-Home"]=> Car, Laptop or Home.
```

```ts
["Car", "-Laptop", "Home"]=> Car or Laptop and Home.
```
