[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / findKeyOrValuePathInObject

# Function: findKeyOrValuePathInObject()

> **findKeyOrValuePathInObject**(`obj`, `keyOrPredicate`, `navigationChr`, `currentPath`): `string`[]

## Parameters

• **obj**: `Record`\<`string`, `any`\>

• **keyOrPredicate**: `string` \| (`key`, `value`) => `boolean`

• **navigationChr**: `string`= `'.'`

• **currentPath**: `string`= `''`

## Returns

`string`[]

## Description

function that takes an object and find the path for the passed key or value, you can pass a predicate function.

## Example

```ts
const myObject = {
   a: 1,
   b: {
     a:2,
       c: 'hello',
       d: {
           e: 'world'
       },
       f: [1, 2, 3]
   }
};

console.log(findKeyOrValuePathInObject(myObject, 'e')); // ['b.d.e']
console.log(findKeyOrValuePathInObject(myObject, (key, val) => Array.isArray(val))); // ['b.f']
console.log(findKeyOrValuePathInObject(myObject, "a")); // ["a", "b.a"]
```

## Source

[src/utils/object/findKeyOrValuePathInObject.ts:20](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/object/findKeyOrValuePathInObject.ts#L20)
