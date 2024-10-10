[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / removeDuplicatesFromArr

# Function: removeDuplicatesFromArr()

> **removeDuplicatesFromArr**\<`T`\>(`arr`, `key`?, `deepCompare`?): `T`[]

## Type parameters

• **T** = `any`

## Parameters

• **arr**: `T`[]= `[]`

• **key?**: `string`

• **deepCompare?**: `boolean`

## Returns

`T`[]

## Examples

```ts
removeDuplicatesFromArr([1,2,1]) => [1,2]
```

```ts
removeDuplicatesFromArr([{a:1}, {a:1}, {a:2}], key:"a") => [{a:1},{a:2}]
```

```ts
removeDuplicatesFromArr([{a:1}, {a:1}, {a:2}], key:"", deepCompare:true) => [{a:1},{a:2}]
```

## Source

[src/utils/array/removeDuplicatesFromArr.ts:8](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/array/removeDuplicatesFromArr.ts#L8)
