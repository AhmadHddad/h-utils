[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / delay

# Function: delay()

> **delay**\<`T`\>(`cb`, `time`, ...`args`): `Promise`\<`T`\>

Defined in: [src/utils/functions/delay.ts:5](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/delay.ts#L5)

## Type Parameters

### T

`T` = `any`

## Parameters

### cb

(...`args`) => `T`

### time

`number` = `200`

### args

...`any`[]

## Returns

`Promise`\<`T`\>

## Description

Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.

## Example

```ts
delay(()=>{console.log(1)} , 1000) // will be called after 1s.
```
