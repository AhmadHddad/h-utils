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

[src/utils/functions/delay.ts:5](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/functions/delay.ts#L5)
