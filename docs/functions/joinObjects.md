[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / joinObjects

# Function: joinObjects()

> **joinObjects**\<`T`\>(...`args`): `T`

## Type parameters

• **T** *extends* `undefined` \| `null` \| `object` \| `object`

## Parameters

• ...**args**: `any`[]

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

## Source

[src/utils/object/joinObjects.ts:8](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/object/joinObjects.ts#L8)
