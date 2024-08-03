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

[src/utils/browser/getWindow.ts:158](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/browser/getWindow.ts#L158)
