[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / deepClone

# Function: deepClone()

> **deepClone**\<`T`\>(`value`, `options`?): `T`

## Type parameters

• **T** = `any`

## Parameters

• **value**: `T`

• **options?**

• **options.json?**: `boolean`

• **options.lossy?**: `boolean`

## Returns

`T`

## Description

will produce a new copy of the passed parameter, you can use it as a polyfill for structuredClone but mind the options.

## Author

https://github.com/ungap/structured-clone

## Examples

```ts
`const cloned = deepClone(
 {
   method() {
     // ignored, won't be cloned
   },
   special: Symbol('also ignored')
 },
 {
   // avoid throwing
   lossy: true,
   // avoid throwing *and* looks for toJSON
   json: true
 }
);`
```

```ts
deepClone({a:1}) => {a:1} //as new copy
```

## Source

[src/utils/general/deepClone.ts:232](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/general/deepClone.ts#L232)
