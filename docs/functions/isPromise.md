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

[src/utils/validation/isPromise.ts:7](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isPromise.ts#L7)
