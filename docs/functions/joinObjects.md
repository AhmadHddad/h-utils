[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / joinObjects

# Function: joinObjects()

> **joinObjects**\<`T`\>(...`args`): `T`

Defined in: [src/utils/object/joinObjects.ts:8](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/object/joinObjects.ts#L8)

## Type Parameters

### T

`T` *extends* `object` \| \{ \}

## Parameters

### args

...`any`[]

## Returns

`T`

## Description

will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).

## Examples

```ts
joinObjects({a:1},{b:2}) => {a:1, b:2}
```

```ts
joinObjects([1,2]) => {}
```

```ts
joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
```

```ts
joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
```
