[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getWindow

# Function: getWindow()

> **getWindow**(): `Window` & *typeof* `globalThis`

Defined in: [src/utils/browser/getWindow.ts:158](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/browser/getWindow.ts#L158)

## Returns

`Window` & *typeof* `globalThis`

## Description

will get the window object or a mock. this is good for SSR.

## Example

```ts
getWindow().document
```
