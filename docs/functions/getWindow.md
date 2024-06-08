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

[src/utils/browser/getWindow.ts:158](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/browser/getWindow.ts#L158)
