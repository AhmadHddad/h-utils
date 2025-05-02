[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getObjectValueByPath

# Function: getObjectValueByPath()

> **getObjectValueByPath**\<`T`\>(`obj`, `path`, `navigationChr`): `T`

Defined in: [src/utils/object/getObjectValueByPath.ts:8](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/object/getObjectValueByPath.ts#L8)

## Type Parameters

### T

`T`

## Parameters

### obj

`Record`\<`string`, `any`\>

### path

`string`

### navigationChr

`string` = `'.'`

## Returns

`T`

The value of the key in the object.

## Description

It takes a string, an object, and a navigation character, and returns the value of the object at the
string's path.

## Examples

```ts
getObjectValueByPath({foo:{bar:"baz"}}, "foo.bar") // "baz"
```

```ts
getObjectValueByPath({b:{ f: [1, 2, 3]}}, 'b.f[2]') // 3
```
