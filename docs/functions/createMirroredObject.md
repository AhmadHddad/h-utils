[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / createMirroredObject

# Function: createMirroredObject()

> **createMirroredObject**\<`T`\>(`keysArray`, `transformCallback`): `{ [K in string]: string }`

Defined in: [src/utils/object/createMirroredObject.ts:11](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/object/createMirroredObject.ts#L11)

## Type Parameters

### T

`T` *extends* `string`[]

## Parameters

### keysArray

\[`...T[]`\]

### transformCallback

[`TransformCallback`](../type-aliases/TransformCallback.md) = `...`

## Returns

`{ [K in string]: string }`

## Description

function returns an object with keys as the same keys and values as the stringified keys.

## Examples

```ts
createMirroredObject(["a", "b"]); //{ a: "a", b: "b" }
```

```ts
createMirroredObject(["a", "b"], (key, value) => [key.toUpperCase(), value]); // { A: "a", B: "b" }
```
