[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / throttlePromise

# Function: throttlePromise()

> **throttlePromise**\<`F`\>(`func`, `waitFor`): (...`args`) => `Promise`\<`ReturnType`\<`F`\>\>

## Type parameters

• **F** *extends* (...`args`) => `any`

## Parameters

• **func**: `F`

• **waitFor**: `number`= `200`

## Returns

`Function`

### Parameters

• ...**args**: `Parameters`\<`F`\>

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

## Source

[src/utils/functions/throttlePromise.ts:9](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/throttlePromise.ts#L9)
