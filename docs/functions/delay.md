[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / delay

# Function: delay()

> **delay**\<`T`\>(`cb`, `time`, ...`args`): `Promise`\<`T`\>

## Type parameters

• **T** = `any`

## Parameters

• **cb**

• **time**: `number`= `200`

• ...**args**: `any`[]

## Returns

`Promise`\<`T`\>

## Description

Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.

## Example

```ts
delay(()=>{console.log(1)} , 1000) // will be called after 1s.
```

## Source

[src/utils/functions/delay.ts:5](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/delay.ts#L5)
