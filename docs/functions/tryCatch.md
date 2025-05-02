[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / tryCatch

# Function: tryCatch()

> **tryCatch**\<`T`, `E`\>(`arg`): `Result`\<`T`, `E`\> \| `Promise`\<`Result`\<`T`, `E`\>\>

Defined in: [src/utils/general/tryCatch.ts:28](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/general/tryCatch.ts#L28)

## Type Parameters

### T

`T`

### E

`E` = `Error`

## Parameters

### arg

`Promise`\<`T`\> | () => `MaybePromise`\<`T`\>

## Returns

`Result`\<`T`, `E`\> \| `Promise`\<`Result`\<`T`, `E`\>\>

## Description

-- a function that takes a promise or a function that returns a promise and returns a promise that resolves to a Result object containing the data or error.

## Examples

```ts
const result = await tryCatch(() => {
    throw new Error('Error');
}); // { error: Error: Error, data: null }
```

```ts
const result = await tryCatch(() => {
return Promise.resolve('Data');
}); // { data: 'Data' }
```
