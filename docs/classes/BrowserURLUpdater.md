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

- [\_reload](BrowserURLUpdater.md#_reload)
- [\_state](BrowserURLUpdater.md#_state)
- [\_url](BrowserURLUpdater.md#_url)

### Accessors

- [reload](BrowserURLUpdater.md#reload)
- [state](BrowserURLUpdater.md#state)
- [url](BrowserURLUpdater.md#url)

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

• **new BrowserURLUpdater**(`url?`, `reloadOnEveryChange?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `window.location.href` |
| `reloadOnEveryChange?` | `boolean` | `undefined` |

#### Defined in

[src/classes/BrowserURLUpdater.ts:19](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L19)

## Properties

### \_reload

• `Private` **\_reload**: `boolean`

#### Defined in

[src/classes/BrowserURLUpdater.ts:16](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L16)

___

### \_state

• `Private` **\_state**: `any` = `{}`

#### Defined in

[src/classes/BrowserURLUpdater.ts:17](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L17)

___

### \_url

• `Private` **\_url**: `URL`

#### Defined in

[src/classes/BrowserURLUpdater.ts:15](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L15)

## Accessors

### reload

• `get` **reload**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/classes/BrowserURLUpdater.ts:89](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L89)

• `set` **reload**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:93](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L93)

___

### state

• `get` **state**(): `any`

#### Returns

`any`

#### Defined in

[src/classes/BrowserURLUpdater.ts:97](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L97)

• `set` **state**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:101](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L101)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:85](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L85)

• `set` **url**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:81](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L81)

## Methods

### getFragment

▸ **getFragment**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:72](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L72)

___

### getPath

▸ **getPath**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/BrowserURLUpdater.ts:53](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L53)

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

[src/classes/BrowserURLUpdater.ts:49](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L49)

___

### removeFragment

▸ **removeFragment**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:76](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L76)

___

### removePath

▸ **removePath**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:62](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L62)

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

[src/classes/BrowserURLUpdater.ts:44](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L44)

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

[src/classes/BrowserURLUpdater.ts:67](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L67)

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

[src/classes/BrowserURLUpdater.ts:57](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L57)

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

[src/classes/BrowserURLUpdater.ts:35](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L35)

___

### updateURL

▸ **updateURL**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/BrowserURLUpdater.ts:26](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/BrowserURLUpdater.ts#L26)
