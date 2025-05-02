[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isObject

# Function: isObject()

> **isObject**\<`T`\>(`val`, `predicate?`): `val is T`

Defined in: [src/utils/validation/isObject.ts:6](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isObject.ts#L6)

## Type Parameters

### T

`T` = \{ \}

## Parameters

### val

`unknown`

### predicate?

(`val`) => `boolean`

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
