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

[src/utils/array/removeDuplicatesFromArr.ts:8](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/array/removeDuplicatesFromArr.ts#L8)
