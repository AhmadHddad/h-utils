[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / createMirroredObject

# Function: createMirroredObject()

> **createMirroredObject**\<`T`\>(`keysArray`, `transformCallback`): `{ [K in T[number]]: string }`

## Type parameters

• **T** *extends* `string`[]

## Parameters

• **keysArray**: [`...T[]`]

• **transformCallback**: [`TransformCallback`](../type-aliases/TransformCallback.md)= `undefined`

## Returns

`{ [K in T[number]]: string }`

## Description

function returns an object with keys as the same keys and values as the stringified keys.

## Examples

```ts
createMirroredObject(["a", "b"]); //{ a: "a", b: "b" }
```

```ts
createMirroredObject(["a", "b"], (key, value) => [key.toUpperCase(), value]); // { A: "a", B: "b" }
```

## Source

[src/utils/object/createMirroredObject.ts:11](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/object/createMirroredObject.ts#L11)
