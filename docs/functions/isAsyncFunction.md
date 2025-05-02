[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isAsyncFunction

# Function: isAsyncFunction()

> **isAsyncFunction**(`fun`): `boolean`

Defined in: [src/utils/validation/isAsyncFunction.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isAsyncFunction.ts#L10)

**`Function`**

isAsyncFunction

## Parameters

### fun

`unknown`

## Returns

`boolean`

## Description

will check if the passed function is async function.

## Examples

```ts
`isAsyncFunction(async function(){}) // true`
```

```ts
`isAsyncFunction(function(){}) // false`
```
