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

[src/utils/browser/getHtmlElementCoords.ts:15](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/browser/getHtmlElementCoords.ts#L15)
