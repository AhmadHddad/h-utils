[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getWindow

# Function: getWindow()

> **getWindow**(): `Window` & *typeof* `globalThis`

Defined in: [src/utils/browser/getWindow.ts:158](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/getWindow.ts#L158)

## Returns

`Window` & *typeof* `globalThis`

## Description

will get the window object or a mock. this is good for SSR.

## Example

```ts
getWindow().document
```
