[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / BrowserURLUpdater

# Class: BrowserURLUpdater

## Important

--Browser Only --

## Description

A utility class for handling and updating URL parameters, paths, and fragments in the browser with/without page refresh."

## Example

```ts
const browserUrl = new BrowserURLUpdater("www.foo.com");
browserUrl.setQueryParam("bar", "1"); // will set the url to "www.foo.com/?bar=1" and update the url without refresh.
```

## Constructors

### new BrowserURLUpdater()

> **new BrowserURLUpdater**(`url`, `reloadOnEveryChange`?): [`BrowserURLUpdater`](BrowserURLUpdater.md)

#### Parameters

• **url**: `string`= `window.location.href`

• **reloadOnEveryChange?**: `boolean`

#### Returns

[`BrowserURLUpdater`](BrowserURLUpdater.md)

#### Source

[src/classes/BrowserURLUpdater.ts:19](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L19)

## Properties

### \_reload

> `private` **\_reload**: `boolean`

#### Source

[src/classes/BrowserURLUpdater.ts:16](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L16)

***

### \_state

> `private` **\_state**: `any` = `{}`

#### Source

[src/classes/BrowserURLUpdater.ts:17](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L17)

***

### \_url

> `private` **\_url**: `URL`

#### Source

[src/classes/BrowserURLUpdater.ts:15](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L15)

## Accessors

### reload

> `get` **reload**(): `boolean`

> `set` **reload**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`boolean`

#### Source

[src/classes/BrowserURLUpdater.ts:89](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L89)

***

### state

> `get` **state**(): `any`

> `set` **state**(`value`): `void`

#### Parameters

• **value**: `any`

#### Returns

`any`

#### Source

[src/classes/BrowserURLUpdater.ts:97](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L97)

***

### url

> `get` **url**(): `string`

> `set` **url**(`value`): `void`

#### Parameters

• **value**: `string`

#### Returns

`string`

#### Source

[src/classes/BrowserURLUpdater.ts:85](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L85)

## Methods

### getFragment()

> **getFragment**(): `string`

#### Returns

`string`

#### Source

[src/classes/BrowserURLUpdater.ts:72](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L72)

***

### getPath()

> **getPath**(): `string`

#### Returns

`string`

#### Source

[src/classes/BrowserURLUpdater.ts:53](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L53)

***

### getQueryParam()

> **getQueryParam**(`key`): `null` \| `string`

#### Parameters

• **key**: `string`

#### Returns

`null` \| `string`

#### Source

[src/classes/BrowserURLUpdater.ts:49](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L49)

***

### removeFragment()

> **removeFragment**(): `void`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:76](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L76)

***

### removePath()

> **removePath**(): `void`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:62](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L62)

***

### removeQueryParam()

> **removeQueryParam**(`key`): `void`

#### Parameters

• **key**: `string`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:44](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L44)

***

### setFragment()

> **setFragment**(`fragment`): `void`

#### Parameters

• **fragment**: `string`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:67](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L67)

***

### setPath()

> **setPath**(`path`): `void`

#### Parameters

• **path**: `string`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:57](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L57)

***

### setQueryParam()

> **setQueryParam**(`key`, `value`): `void`

#### Parameters

• **key**: `string`

• **value**: `undefined` \| `string`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:35](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L35)

***

### updateURL()

> **updateURL**(): `void`

#### Returns

`void`

#### Source

[src/classes/BrowserURLUpdater.ts:26](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/BrowserURLUpdater.ts#L26)
