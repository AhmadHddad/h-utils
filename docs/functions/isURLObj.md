[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isURLObj

# Function: isURLObj()

> **isURLObj**(`url`): `boolean`

## Parameters

• **url**: `URL`

## Returns

`boolean`

## Description

will check if the passed url is instance of URL.

## Examples

```ts
isURLObj("www.google.com") // false
```

```ts
isURLObj(new URL("https://google.com")) // true
```

## Source

[src/utils/validation/isURLObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/validation/isURLObj.ts#L6)
