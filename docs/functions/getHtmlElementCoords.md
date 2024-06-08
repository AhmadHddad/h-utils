[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getHtmlElementCoords

# Function: getHtmlElementCoords()

> **getHtmlElementCoords**(`element`, `options`): `object`

## Parameters

• **element**: `HTMLElement`

• **options**: [`GetHtmlElementCoordsOptions`](../type-aliases/GetHtmlElementCoordsOptions.md)= `undefined`

## Returns

`object`

### x

> **x**: `number`

### y

> **y**: `number`

## Description

Finding element's position (x, y coordinates) relative to the document.

## Examples

```ts
getElementCoords(document.getElementById("id")) // {x:1, y:1}
```

```ts
getElementCoords(document.getElementById("id"), {position:"center"}) // {x:1, y:0}
```

```ts
getElementCoords(document.getElementById("id"), {position:"top right"}) // {x:1, y:2}
```

```ts
getElementCoords(document.getElementById("id"), {position:"top left"}) // {x:2, y:1}
```

```ts
getElementCoords(document.getElementById("id"), {precise:true}) // {x:2.123, y:1.123}
```

## Source

[src/utils/browser/getHtmlElementCoords.ts:13](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/browser/getHtmlElementCoords.ts#L13)
