[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getObjectValueByPath

# Function: getObjectValueByPath()

> **getObjectValueByPath**\<`T`\>(`obj`, `path`, `navigationChr`): `T` \| `null`

## Type parameters

• **T**

## Parameters

• **obj**: `Record`\<`string`, `any`\>

• **path**: `string`

• **navigationChr**: `string`= `'.'`

## Returns

`T` \| `null`

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

## Source

[src/utils/object/getObjectValueByPath.ts:8](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/object/getObjectValueByPath.ts#L8)
