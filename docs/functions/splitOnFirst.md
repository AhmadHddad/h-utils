[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / splitOnFirst

# Function: splitOnFirst()

> **splitOnFirst**(`string`, `separator`): `string`[]

Defined in: [src/utils/string/splitOnFirst.ts:8](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/string/splitOnFirst.ts#L8)

## Parameters

### string

`string`

string

### separator

`string`

The separator to split on.

## Returns

`string`[]

## Description

It takes a string and a separator and returns an array of two strings, the first being the string up
to the separator and the second being the string after the separator.

## Example

```ts
splitOnFirst('key:value:value2', ':') // ['key', 'value:value2']
```
