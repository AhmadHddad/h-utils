[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / excludeKeys

# Function: excludeKeys()

> **excludeKeys**\<`T`\>(`object`, `predicate`): `object`

"It returns a new object with the same keys as the original object, except for the keys that match
the predicate."

The predicate is a function that takes three arguments: the key, the value, and the object. It
returns true if the key should be included in the new object, and false if it should be excluded

## Type parameters

• **T** *extends* `object`

## Parameters

• **object**: `T`

The object to filter.

• **predicate**: [`KeysArr`](../type-aliases/KeysArr.md) \| [`PredicateFunc`](../type-aliases/PredicateFunc.md)\<`T`\>

A function that returns true if the key should be included.

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

## Source

[src/utils/object/excludeKeys.ts:21](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/object/excludeKeys.ts#L21)
