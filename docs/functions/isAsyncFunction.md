[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isAsyncFunction

# Function: isAsyncFunction()

> **isAsyncFunction**(`fun`): `boolean`

## Parameters

• **fun**: `unknown`

## Returns

`boolean`

## Function

isAsyncFunction

## Description

will check if the passed function is async function.

## Examples

```ts
`isAsyncFunction(async function(){}) // true`
```

```ts
`isAsyncFunction(function(){}) // false`
```

## Source

[src/utils/validation/isAsyncFunction.ts:10](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isAsyncFunction.ts#L10)
