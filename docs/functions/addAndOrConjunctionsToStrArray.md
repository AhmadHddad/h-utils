[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / addAndOrConjunctionsToStrArray

# Function: addAndOrConjunctionsToStrArray()

> **addAndOrConjunctionsToStrArray**(`stringArray`): `string`

## Parameters

• **stringArray**: `string`[]

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

## Source

[src/utils/string/addAndOrConjunctionsToStrArray.ts:10](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/string/addAndOrConjunctionsToStrArray.ts#L10)
