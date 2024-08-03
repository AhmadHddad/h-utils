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

[src/utils/validation/isAsyncFunction.ts:10](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/validation/isAsyncFunction.ts#L10)
