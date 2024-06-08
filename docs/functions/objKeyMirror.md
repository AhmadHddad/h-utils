[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / objKeyMirror

# Function: objKeyMirror()

> **objKeyMirror**\<`T`\>(`obj`): `{ [K in keyof T]: K }`

## Type parameters

• **T** *extends* `Record`\<`string`, `any`\>

## Parameters

• **obj**: `T`

## Returns

`{ [K in keyof T]: K }`

## Description

function returns an object with keys as the same keys and values as the stringified keys.

## Example

```ts
objKeyMirror({ a: 1, b: 2 }); //{ a: "a", b: "b" }
```

## Source

[src/utils/object/objKeyMirror.ts:5](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/object/objKeyMirror.ts#L5)
