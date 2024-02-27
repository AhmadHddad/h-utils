[hd-utils](../README.md) / [Exports](../modules.md) / BrowserURLUpdater

# Class: BrowserURLUpdater

**`Important`**

--Browser Only --

**`Description`**

A utility class for handling and updating URL parameters, paths, and fragments in the browser with/without page refresh."

**`Example`**

```ts
const browserUrl = new BrowserURLUpdater("www.foo.com");
browserUrl.setQueryParam("bar", "1"); // will set the url to "www.foo.com/?bar=1" and update the url without refresh.
```

## Table of contents

### Constructors

- [constructor](BrowserURLUpdater.md#constructor)

### Properties

- [reload](BrowserURLUpdater.md#reload)
- [state](BrowserURLUpdater.md#state)
- [url](BrowserURLUpdater.md#url)

### Accessors

- [Reload](BrowserURLUpdater.md#reload-1)
- [State](BrowserURLUpdater.md#state-1)
- [URL](BrowserURLUpdater.md#url-1)

### Methods

- [getFragment](BrowserURLUpdater.md#getfragment)
- [getPath](BrowserURLUpdater.md#getpath)
- [getQueryParam](BrowserURLUpdater.md#getqueryparam)
- [removeFragment](BrowserURLUpdater.md#removefragment)
- [removePath](BrowserURLUpdater.md#removepath)
- [removeQueryParam](BrowserURLUpdater.md#removequeryparam)
- [setFragment](BrowserURLUpdater.md#setfragment)
- [setPath](BrowserURLUpdater.md#setpath)
- [setQueryParam](BrowserURLUpdater.md#setqueryparam)
- [updateURL](BrowserURLUpdater.md#updateurl)

## Constructors

### constructor

• **new BrowserURLUpdater**(`url?`, `reload?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `window.location.href` |
| `reload?` | `boolean` | `undefined` |

#### Defined in

[src/classes/BrowserURLUpdater.ts:19](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L19)

## Properties

### reload

• `Private` **reload**: `boolean`

#### Defined in

[src/classes/BrowserURLUpdater.ts:16](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L16)

___

### state

• `Private` **state**: `any` = `{}`

#### Defined in

[src/classes/BrowserURLUpdater.ts:17](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L17)

___

### url

• `Private` **url**: `URL`

#### Defined in

[src/classes/BrowserURLUpdater.ts:15](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L15)

## Accessors

### Reload

• `get` **Reload**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/classes/BrowserURLUpdater.ts:95](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L95)

• `set` **Reload**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:99](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L99)

___

### State

• `get` **State**(): `any`

#### Returns

`any`

#### Defined in

[src/classes/BrowserURLUpdater.ts:103](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L103)

• `set` **State**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:107](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L107)

___

### URL

• `get` **URL**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:91](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L91)

• `set` **URL**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:87](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L87)

## Methods

### getFragment

▸ **getFragment**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:78](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L78)

___

### getPath

▸ **getPath**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:59](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L59)

___

### getQueryParam

▸ **getQueryParam**(`key`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:55](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L55)

___

### removeFragment

▸ **removeFragment**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:82](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L82)

___

### removePath

▸ **removePath**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:68](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L68)

___

### removeQueryParam

▸ **removeQueryParam**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:50](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L50)

___

### setFragment

▸ **setFragment**(`fragment`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:73](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L73)

___

### setPath

▸ **setPath**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:63](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L63)

___

### setQueryParam

▸ **setQueryParam**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:41](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L41)

___

### updateURL

▸ **updateURL**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:32](https://github.com/AhmadHddad/h-utils/blob/2a9a611/src/classes/BrowserURLUpdater.ts#L32)
