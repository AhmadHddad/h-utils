[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isPromise

# Function: isPromise()

> **isPromise**(`p`): `p is Promise<any>`

## Parameters

• **p**: `unknown`

## Returns

`p is Promise<any>`

## Function

isPromise

## Description

will check if the passed param is a promise or not.

## Examples

```ts
`isPromise({}) // false`
```

```ts
`isPromise(new Promise(()=>{})) // true`
```

## Source

[src/utils/validation/isPromise.ts:7](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isPromise.ts#L7)
