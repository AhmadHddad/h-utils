[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / fastDeepEqual

# Function: fastDeepEqual()

> **fastDeepEqual**\<`T`\>(`a`, `b`): `a is T`

## Type parameters

• **T**

## Parameters

• **a**: `any`

• **b**: `T`

## Returns

`a is T`

## Description

The fastest deep equal with ES6 Map, Set and Typed arrays support.
the same as fast-deep-equal package.

## Example

```ts
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```

## Source

[src/utils/object/fastDeepEqual.ts:11](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/object/fastDeepEqual.ts#L11)
