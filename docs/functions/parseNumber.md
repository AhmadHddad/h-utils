[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / parseNumber

# Function: parseNumber()

> **parseNumber**(`number`): `number`

It takes a string, removes all non-numeric characters, and returns the result

## Parameters

• **number**: `string` \| `number`

string - The string to be parsed.

## Returns

`number`

A function that takes a string and returns a string with all non-digit characters removed.

## Example

```ts
parseNumber("123 ") => 123
```

## Source

[src/utils/string/parseNumber.ts:9](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/string/parseNumber.ts#L9)
