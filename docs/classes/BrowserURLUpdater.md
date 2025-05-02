[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / BrowserURLUpdater

# Class: BrowserURLUpdater

Defined in: [src/classes/BrowserURLUpdater.ts:14](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L14)

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

### Constructor

> **new BrowserURLUpdater**(`url`, `reloadOnEveryChange?`): `BrowserURLUpdater`

Defined in: [src/classes/BrowserURLUpdater.ts:19](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L19)

#### Parameters

##### url

`string` = `window.location.href`

##### reloadOnEveryChange?

`boolean`

#### Returns

`BrowserURLUpdater`

## Accessors

### reload

#### Get Signature

> **get** **reload**(): `boolean`

Defined in: [src/classes/BrowserURLUpdater.ts:89](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L89)

##### Returns

`boolean`

#### Set Signature

> **set** **reload**(`value`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:93](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L93)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### state

#### Get Signature

> **get** **state**(): `any`

Defined in: [src/classes/BrowserURLUpdater.ts:97](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L97)

##### Returns

`any`

#### Set Signature

> **set** **state**(`value`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:101](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L101)

##### Parameters

###### value

`any`

##### Returns

`void`

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/classes/BrowserURLUpdater.ts:85](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L85)

##### Returns

`string`

#### Set Signature

> **set** **url**(`value`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:81](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L81)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### getFragment()

> **getFragment**(): `string`

Defined in: [src/classes/BrowserURLUpdater.ts:72](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L72)

#### Returns

`string`

***

### getPath()

> **getPath**(): `string`

Defined in: [src/classes/BrowserURLUpdater.ts:53](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L53)

#### Returns

`string`

***

### getQueryParam()

> **getQueryParam**(`key`): `string`

Defined in: [src/classes/BrowserURLUpdater.ts:49](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L49)

#### Parameters

##### key

`string`

#### Returns

`string`

***

### removeFragment()

> **removeFragment**(): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:76](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L76)

#### Returns

`void`

***

### removePath()

> **removePath**(): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:62](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L62)

#### Returns

`void`

***

### removeQueryParam()

> **removeQueryParam**(`key`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:44](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L44)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### setFragment()

> **setFragment**(`fragment`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:67](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L67)

#### Parameters

##### fragment

`string`

#### Returns

`void`

***

### setPath()

> **setPath**(`path`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:57](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L57)

#### Parameters

##### path

`string`

#### Returns

`void`

***

### setQueryParam()

> **setQueryParam**(`key`, `value`): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:35](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L35)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`void`

***

### updateURL()

> **updateURL**(): `void`

Defined in: [src/classes/BrowserURLUpdater.ts:26](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/BrowserURLUpdater.ts#L26)

#### Returns

`void`
