[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isAsyncFunction

# Function: isAsyncFunction()

> **isAsyncFunction**(`fun`): `boolean`

Defined in: [src/utils/validation/isAsyncFunction.ts:10](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isAsyncFunction.ts#L10)

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
