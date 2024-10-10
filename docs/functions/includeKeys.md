[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / includeKeys

# Function: includeKeys()

> **includeKeys**\<`T`\>(`object`, `predicate`): `object`

## Type parameters

• **T** *extends* `object`

## Parameters

• **object**: `T`

The object to copy enumerable properties from.

• **predicate**: [`KeysArr`](../type-aliases/KeysArr.md) \| [`PredicateFunc`](../type-aliases/PredicateFunc.md)\<`T`\>

A function that returns true if the key should be included in the result.

## Returns

`object`

A new object with the same enumerable properties as the original object, but with the
values filtered by the predicate.

## Description

"It returns a new object that contains only the enumerable properties of the original object that
match the predicate."

The predicate can be either an array of keys or a function that takes the key, value, and object as
arguments

## Examples

```ts
includeKeys({
   foo: true,
   bar: false
}, (key, value) => value === true) => {foo: true}
```

```ts
includeKeys({
   foo: true,
   bar: false
}, ["foo"]) => {foo:true}
```

## Source

[src/utils/object/includeKeys.ts:22](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/object/includeKeys.ts#L22)
