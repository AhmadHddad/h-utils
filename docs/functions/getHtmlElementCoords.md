[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getHtmlElementCoords

# Function: getHtmlElementCoords()

> **getHtmlElementCoords**(`element`, `options`): `object`

Defined in: [src/utils/browser/getHtmlElementCoords.ts:15](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/browser/getHtmlElementCoords.ts#L15)

## Parameters

### element

`HTMLElement`

### options

[`GetHtmlElementCoordsOptions`](../type-aliases/GetHtmlElementCoordsOptions.md) = `...`

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
