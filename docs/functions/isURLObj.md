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

[src/utils/validation/isURLObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isURLObj.ts#L6)
