[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / fastDeepEqual

# Function: fastDeepEqual()

> **fastDeepEqual**\<`T`\>(`a`, `b`): `a is T`

Defined in: [src/utils/object/fastDeepEqual.ts:11](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/object/fastDeepEqual.ts#L11)

## Type Parameters

### T

`T`

## Parameters

### a

`any`

### b

`T`

## Returns

`a is T`

## Description

The fastest deep equal with ES6 Map, Set and Typed arrays support.
the same as fast-deep-equal package.

## Example

```ts
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```
