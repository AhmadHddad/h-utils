[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / deepClone

# Function: deepClone()

> **deepClone**\<`T`\>(`value`, `options?`): `T`

Defined in: [src/utils/general/deepClone.ts:232](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/general/deepClone.ts#L232)

## Type Parameters

### T

`T` = `any`

## Parameters

### value

`T`

### options?

#### json?

`boolean`

#### lossy?

`boolean`

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
