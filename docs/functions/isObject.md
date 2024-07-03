[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isObject

# Function: isObject()

> **isObject**\<`T`\>(`val`, `predicate`?): `val is T`

## Type parameters

• **T** = `object`

## Parameters

• **val**: `unknown`

• **predicate?**

## Returns

`val is T`

## Description

If the type of the value is a object, return true, otherwise return false. You can pass a function to check for a specific key inside the object

## Examples

```ts
isObject({}) //true
```

```ts
isObject({}, (obj) => !!obj.name) //false
```

## Source

[src/utils/validation/isObject.ts:6](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/validation/isObject.ts#L6)
