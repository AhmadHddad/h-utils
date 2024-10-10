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

[src/utils/validation/isObject.ts:6](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isObject.ts#L6)
