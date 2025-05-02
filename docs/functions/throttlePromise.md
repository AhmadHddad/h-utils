[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / throttlePromise

# Function: throttlePromise()

> **throttlePromise**\<`F`\>(`func`, `waitFor`): (...`args`) => `Promise`\<`ReturnType`\<`F`\>\>

Defined in: [src/utils/functions/throttlePromise.ts:9](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/throttlePromise.ts#L9)

## Type Parameters

### F

`F` *extends* (...`args`) => `any`

## Parameters

### func

`F`

### waitFor

`number` = `200`

## Returns

> (...`args`): `Promise`\<`ReturnType`\<`F`\>\>

### Parameters

#### args

...`Parameters`\<`F`\>

### Returns

`Promise`\<`ReturnType`\<`F`\>\>

## Description

it will throttlePromise the call of the function param to wait for n seconds.

## Example

```ts
const func = (hello: string) => { console.log(new Date().getTime(), '>>>', hello) }
const thrFunc = throttlePromise(func, 1000)
thrFunc('hello 1')
```
