[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / removeDuplicatesFromArr

# Function: removeDuplicatesFromArr()

> **removeDuplicatesFromArr**\<`T`\>(`arr`, `key?`, `deepCompare?`): `T`[]

Defined in: [src/utils/array/removeDuplicatesFromArr.ts:8](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/array/removeDuplicatesFromArr.ts#L8)

## Type Parameters

### T

`T` = `any`

## Parameters

### arr

`T`[] = `[]`

### key?

`string`

### deepCompare?

`boolean`

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
