[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isPromise

# Function: isPromise()

> **isPromise**(`p`): `p is Promise<any>`

Defined in: [src/utils/validation/isPromise.ts:7](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isPromise.ts#L7)

**`Function`**

isPromise

## Parameters

### p

`unknown`

## Returns

`p is Promise<any>`

## Description

will check if the passed param is a promise or not.

## Examples

```ts
`isPromise({}) // false`
```

```ts
`isPromise(new Promise(()=>{})) // true`
```
