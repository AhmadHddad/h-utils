[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getWindow

# Function: getWindow()

> **getWindow**(): `Window` & *typeof* `globalThis`

## Returns

`Window` & *typeof* `globalThis`

## Description

will get the window object or a mock. this is good for SSR.

## Example

```ts
getWindow().document
```

## Source

[src/utils/browser/getWindow.ts:158](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/browser/getWindow.ts#L158)
