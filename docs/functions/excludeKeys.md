[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / excludeKeys

# Function: excludeKeys()

> **excludeKeys**\<`T`\>(`object`, `predicate`): `object`

Defined in: [src/utils/object/excludeKeys.ts:21](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/object/excludeKeys.ts#L21)

"It returns a new object with the same keys as the original object, except for the keys that match
the predicate."

The predicate is a function that takes three arguments: the key, the value, and the object. It
returns true if the key should be included in the new object, and false if it should be excluded

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### object

`T`

The object to filter.

### predicate

A function that returns true if the key should be included.

[`KeysArr`](../type-aliases/KeysArr.md) | [`PredicateFunc`](../type-aliases/PredicateFunc.md)\<`T`\>

## Returns

`object`

## Examples

```ts
excludeKeys({
   foo: true,
   bar: false
}, (key, value) => value === true) => {bar: false}
```

```ts
excludeKeys({
   foo: true,
   bar: false
}, ["foo"]) => {bar:true}
```
