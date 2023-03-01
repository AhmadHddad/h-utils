[hd-utils](README.md) / Exports

# hd-utils

## Table of contents

### Namespaces

- [regex](modules/regex.md)

### Classes

- [HMap](classes/HMap.md)

### Function Functions

- [debounce](modules.md#debounce)
- [throttle](modules.md#throttle)

### Lang Functions

- [isObjectLike](modules.md#isobjectlike)

### Other Functions

- [addAndOrConjunctionsToStrArray](modules.md#addandorconjunctionstostrarray)
- [addEventListener](modules.md#addeventlistener)
- [addHttpToURL](modules.md#addhttptourl)
- [arrayRange](modules.md#arrayrange)
- [attempt](modules.md#attempt)
- [attemptAsync](modules.md#attemptasync)
- [breakStrAfterNChar](modules.md#breakstrafternchar)
- [capitalize](modules.md#capitalize)
- [classNames](modules.md#classnames)
- [compare2ObjectsBaseOnKeysArr](modules.md#compare2objectsbaseonkeysarr)
- [conditionalReturn](modules.md#conditionalreturn)
- [count](modules.md#count)
- [debouncePromise](modules.md#debouncepromise)
- [deepCompareObjects](modules.md#deepcompareobjects)
- [delay](modules.md#delay)
- [excludeKeys](modules.md#excludekeys)
- [excludeQueryParamFromUrl](modules.md#excludequeryparamfromurl)
- [extractQueryFromUrl](modules.md#extractqueryfromurl)
- [extractUrlsFromString](modules.md#extracturlsfromstring)
- [fastDeepEqual](modules.md#fastdeepequal)
- [generateGuid](modules.md#generateguid)
- [getAsciiCodeForChar](modules.md#getasciicodeforchar)
- [getAsciiSumFromString](modules.md#getasciisumfromstring)
- [getAverage](modules.md#getaverage)
- [getBase64FromFile](modules.md#getbase64fromfile)
- [getFileExtensionFromString](modules.md#getfileextensionfromstring)
- [getFirstNLetters](modules.md#getfirstnletters)
- [getGlobalThis](modules.md#getglobalthis)
- [getHashFromString](modules.md#gethashfromstring)
- [getNameInitials](modules.md#getnameinitials)
- [getNumberFromString](modules.md#getnumberfromstring)
- [getSmallestArrInObj](modules.md#getsmallestarrinobj)
- [getSum](modules.md#getsum)
- [getWindowObj](modules.md#getwindowobj)
- [has](modules.md#has)
- [hashString](modules.md#hashstring)
- [includeKeys](modules.md#includekeys)
- [isArray](modules.md#isarray)
- [isArrayOfStrings](modules.md#isarrayofstrings)
- [isBiggerThan](modules.md#isbiggerthan)
- [isBoolean](modules.md#isboolean)
- [isBrowser](modules.md#isbrowser)
- [isDateType](modules.md#isdatetype)
- [isEmail](modules.md#isemail)
- [isEmpty](modules.md#isempty)
- [isFunction](modules.md#isfunction)
- [isLength](modules.md#islength)
- [isNull](modules.md#isnull)
- [isNullOrEmptyString](modules.md#isnulloremptystring)
- [isNullOrUndefined](modules.md#isnullorundefined)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isSmallerThan](modules.md#issmallerthan)
- [isString](modules.md#isstring)
- [isTruthy](modules.md#istruthy)
- [isURL](modules.md#isurl)
- [isUndefined](modules.md#isundefined)
- [isWhiteSpace](modules.md#iswhitespace)
- [joinObjects](modules.md#joinobjects)
- [mapStringToColorFromArr](modules.md#mapstringtocolorfromarr)
- [memoize](modules.md#memoize)
- [multiplyAll](modules.md#multiplyall)
- [nFormatter](modules.md#nformatter)
- [navigateObjWithString](modules.md#navigateobjwithstring)
- [paramsToObject](modules.md#paramstoobject)
- [parse](modules.md#parse)
- [parseDate](modules.md#parsedate)
- [parseJwt](modules.md#parsejwt)
- [parseNumber](modules.md#parsenumber)
- [parseString](modules.md#parsestring)
- [parseUrl](modules.md#parseurl)
- [pickQueryParamFromUrl](modules.md#pickqueryparamfromurl)
- [removeEventListener](modules.md#removeeventlistener)
- [removeHashFromUrl](modules.md#removehashfromurl)
- [sortArr](modules.md#sortarr)
- [sortByMultiProperties](modules.md#sortbymultiproperties)
- [splitOnFirst](modules.md#splitonfirst)
- [splitUpperCase](modules.md#splituppercase)
- [stringToHexColor](modules.md#stringtohexcolor)
- [stringToHslColor](modules.md#stringtohslcolor)
- [stringifyUrl](modules.md#stringifyurl)
- [throttlePromise](modules.md#throttlepromise)
- [toArray](modules.md#toarray)

## Function Functions

### debounce

▸ **debounce**<`T`\>(`func`, `wait?`, `options?`): (...`args`: `any`[]) => `any`

Creates a debounced function that delays invoking `func` until after `wait`
milliseconds have elapsed since the last time the debounced function was
invoked, or until the next browser frame is drawn. The debounced function
comes with a `cancel` method to cancel delayed `func` invocations and a
`flush` method to immediately invoke them. Provide `options` to indicate
whether `func` should be invoked on the leading and/or trailing edge of the
`wait` timeout. The `func` is invoked with the last arguments provided to the
debounced function. Subsequent calls to the debounced function return the
result of the last `func` invocation.

**Note:** If `leading` and `trailing` options are `true`, `func` is
invoked on the trailing edge of the timeout only if the debounced function
is invoked more than once during the `wait` timeout.

If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
until the next tick, similar to `setTimeout` with a timeout of `0`.

If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
invocation will be deferred until the next frame is drawn (typically about
16ms).

See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
for details over the differences between `debounce` and `throttle`.

**`Since`**

0.1.0

**`Example`**

// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150))

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}))

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })
const source = new EventSource('/stream')
jQuery(source).on('message', debounced)

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel)

// Check for pending invocations.
const status = debounced.pending() ? "Pending..." : "Ready"

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | (...`args`: `any`[]) => `T` | `undefined` | The function to debounce. |
| `wait?` | `number` | `200` | The number of milliseconds to delay; if omitted, `requestAnimationFrame` is used (if available). |
| `options?` | `Object` | `undefined` | The options object. |
| `options.leading` | `boolean` | `undefined` | Specify invoking on the leading edge of the timeout. |
| `options.maxWait` | `number` | `undefined` | The maximum time `func` is allowed to be delayed before it's invoked. |
| `options.trailing` | `boolean` | `undefined` | Specify invoking on the trailing edge of the timeout. |

#### Returns

`fn`

Returns the new debounced function.

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

| Name | Type |
| :------ | :------ |
| `cancel` | () => `void` |
| `flush` | () => `any` |
| `pending` | () => `boolean` |

#### Defined in

[src/utils/functions/debounce.ts:65](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/debounce.ts#L65)

___

### throttle

▸ **throttle**<`T`\>(`func`, `wait?`, `options?`): () => `void` \| (...`args`: `any`[]) => `any`

Creates a throttled function that only invokes `func` at most once per
every `wait` milliseconds (or once per browser frame). The throttled function
comes with a `cancel` method to cancel delayed `func` invocations and a
`flush` method to immediately invoke them. Provide `options` to indicate
whether `func` should be invoked on the leading and/or trailing edge of the
`wait` timeout. The `func` is invoked with the last arguments provided to the
throttled function. Subsequent calls to the throttled function return the
result of the last `func` invocation.

**Note:** If `leading` and `trailing` options are `true`, `func` is
invoked on the trailing edge of the timeout only if the throttled function
is invoked more than once during the `wait` timeout.

If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
until the next tick, similar to `setTimeout` with a timeout of `0`.

If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
invocation will be deferred until the next frame is drawn (typically about
16ms).

See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
for details over the differences between `throttle` and `debounce`.

**`Since`**

0.1.0

**`Example`**

// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', throttle(updatePosition, 100))

 Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
const throttled = throttle(renewToken, 300000, { 'trailing': false })
jQuery(element).on('click', throttled)

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `func` | (...`args`: `any`[]) => `T` | `undefined` | The function to throttle. |
| `wait?` | `number` | `200` | The number of milliseconds to throttle invocations to; if omitted, `requestAnimationFrame` is used (if available). |
| `options?` | `Object` | `undefined` | The options object. |
| `options.leading` | `boolean` | `undefined` | Specify invoking on the leading edge of the timeout. |
| `options.trailing` | `boolean` | `undefined` | Specify invoking on the trailing edge of the timeout. |

#### Returns

() => `void` \| (...`args`: `any`[]) => `any`

Returns the new throttled function.

#### Defined in

[src/utils/functions/throttle.ts:52](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/throttle.ts#L52)

___

## Lang Functions

### isObjectLike

▸ **isObjectLike**(`value`): `boolean`

Checks if `value` is object-like. A value is object-like if it's not `null`
and has a `typeof` result of "object".

**`Since`**

4.0.0

**`Example`**

```ts
isObjectLike({})
 => true

isObjectLike([1, 2, 3])
 => true

isObjectLike(Function)
 => false

isObjectLike(null)
 => false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is object-like, else `false`.

#### Defined in

[src/utils/validation/isObjectLike.ts:23](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isObjectLike.ts#L23)

___

## Other Functions

### addAndOrConjunctionsToStrArray

▸ **addAndOrConjunctionsToStrArray**(`stringArray`): `string`

**`Description`**

It takes an array of strings and returns a string with "And", "Or", "," in the sentance depending on their position.

**`Example`**

```ts
["Car", "Laptop", "Home"]=> Car, Laptop and Home.
```

**`Example`**

```ts
["Car", "Laptop", "-Home"]=> Car, Laptop or Home.
```

**`Example`**

```ts
["Car", "-Laptop", "Home"]=> Car or Laptop and Home.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stringArray` | `string`[] | string[] |

#### Returns

`string`

A string

#### Defined in

[src/utils/string/addAndOrConjunctionsToStrArray.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/addAndOrConjunctionsToStrArray.ts#L10)

___

### addEventListener

▸ **addEventListener**<`T`\>(`obj`, `...args`): `void`

**`Description`**

will check if the passed object accepts addEventListener and add it.

**`Example`**

```ts
addEventListener(event.target, "touchend", preventDefault, { passive: false });
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Window` \| `EventTarget` \| `Document` \| `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `...args` | [`string`, `Fn`, ...any[]] \| `Parameters`<`T`[``"addEventListener"``]\>[] |

#### Returns

`void`

#### Defined in

[src/utils/browser/addEventListener.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/browser/addEventListener.ts#L6)

___

### addHttpToURL

▸ **addHttpToURL**(`url`, `secured?`): `string`

**`Description`**

If the url doesn't contain http, add it to the url, otherwise return the url.

**`Example`**

```ts
addHttpToURL("www.google.com") => "http://www.google.com"
```

**`Example`**

```ts
addHttpToURL("www.google.com", true) => "https://www.google.com"
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | string - the url to check |
| `secured` | `boolean` | `false` | https instead of http |

#### Returns

`string`

#### Defined in

[src/utils/route/addHttpToURL.ts:11](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/addHttpToURL.ts#L11)

___

### arrayRange

▸ **arrayRange**(`a`, `b`, `step`): `Key`[]

**`Description`**

It takes two arguments, a and b, and returns an array of numbers or letters from a to b

**`Example`**

```ts
arrayRange(1,5) => [ 1, 2, 3, 4, 5 ]
```

**`Example`**

```ts
arrayRange("a", "c") => ["a", "b", "c"]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `Key` | The starting point of the array. |
| `b` | `Key` | The ending value of the range. |
| `step` | `number` | The step value. |

#### Returns

`Key`[]

An array of strings.

#### Defined in

[src/utils/array/arrayRange.ts:12](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/array/arrayRange.ts#L12)

___

### attempt

▸ **attempt**<`T`\>(`func`, `options?`, `...args`): `any`

**`Description`**

Attempts to invoke `func`, returning either the result or will adjust to the options,
if nothing was passed to the options, it will return nothing

**`Example`**

```ts
attempt(selector =>
  document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (...`args`: `any`[]) => `T` |
| `options?` | `AttemptOptions` |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[src/utils/functions/attempt.ts:14](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/attempt.ts#L14)

___

### attemptAsync

▸ **attemptAsync**<`T`\>(`func`, `options?`, `...args`): `Promise`<`any`\>

**`Description`**

Attempts to invoke `func` async, returning either the result or will adjust to the options,
if nothing was passed to the options, it will return nothing

**`Example`**

```ts
await attemptAsync(selector =>
  document.querySelectorAll(selector),{errorHander:(e)=> console.error(e)}, '>_>')
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (...`args`: `any`[]) => `T` |
| `options?` | `AttemptOptions` |
| `...args` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/functions/attemptAsync.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/attemptAsync.ts#L10)

___

### breakStrAfterNChar

▸ **breakStrAfterNChar**(`str`, `maxWidth`): `string`

**`Description`**

It will break the passed string into multiline string after a cretin length

**`Example`**

breakStrAfterNChar("Javascript") => `Java
scri
pt`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `maxWidth` | `number` |

#### Returns

`string`

#### Defined in

[src/utils/string/breakStrAfterNChar.ts:9](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/breakStrAfterNChar.ts#L9)

___

### capitalize

▸ **capitalize**(`str`): `string`

**`Description`**

will return the passed string with the first character capitalized.

**`Example`**

```ts
capitalize("javascript") => "Javascript"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/string/capitalize.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/capitalize.ts#L8)

___

### classNames

▸ **classNames**(`...args`): `string`

**`Description`**

It takes any number of arguments, and returns a string of all the arguments that are truthy,
separated by spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ArgumentArray` |

#### Returns

`string`

#### Defined in

[src/utils/style/classNames.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/style/classNames.ts#L7)

___

### compare2ObjectsBaseOnKeysArr

▸ **compare2ObjectsBaseOnKeysArr**(`prevObj?`, `nextObj?`, `keysArr?`): `boolean`

**`Description`**

It compares two objects based on the keys array passed to it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `prevObj` | `Object` | `{}` | the previous object |
| `nextObj` | `Object` | `{}` | { |
| `keysArr` | `string`[] | `[]` | string[] = [] - an array of keys that you want to compare. |

#### Returns

`boolean`

#### Defined in

[src/utils/object/compare2ObjectsBaseOnKeysArr.ts:9](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/compare2ObjectsBaseOnKeysArr.ts#L9)

___

### conditionalReturn

▸ **conditionalReturn**(`condition`, `val1`, `val2?`): `void`

If the condition is true, return val1, otherwise return val2.

**`Example`**

```ts
conditionalReturn([].length > 0, "has items") => if true will return "has items" if not will return val2 (null if not provided)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `condition` | `boolean` | `undefined` | boolean |
| `val1` | `any` | `undefined` | The value to return if the condition is true |
| `val2?` | `any` | `null` | The value to return if the condition is false. |

#### Returns

`void`

#### Defined in

[src/utils/general/conditionalReturn.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/general/conditionalReturn.ts#L8)

___

### count

▸ **count**(`input?`, `options?`): `number`

**`Description`**

Will return the length of the passed param wether if it was obj, array or a string.

**`Example`**

```ts
count([1,2,3]) => 3
```

**`Example`**

```ts
count("js") => 2
```

**`Example`**

```ts
count("  ", {trimString:true}) => 0
```

**`Example`**

```ts
count("  ", {trimString:false}) => 2
```

**`Example`**

```ts
count({a:1,b:2}) => 2
```

**`Example`**

```ts
count(true) => 1
```

**`Example`**

```ts
count(false) => 0
```

**`Example`**

```ts
count({a:1,b:2}) => 2
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | `string` \| `number` \| `boolean` \| {} \| [] |
| `options?` | `Object` |
| `options.trimString` | `boolean` |

#### Returns

`number`

#### Defined in

[src/utils/general/count.ts:12](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/general/count.ts#L12)

___

### debouncePromise

▸ **debouncePromise**<`T`, `U`\>(`callback`, `wait`): (...`args`: `T`) => `Promise`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |
| `U` | `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (...`args`: `T`) => `U` \| `PromiseLike`<`U`\> |
| `wait` | `number` |

#### Returns

`fn`

▸ (`...args`): `Promise`<`U`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

##### Returns

`Promise`<`U`\>

#### Defined in

[src/utils/functions/debouncePromise.ts:3](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/debouncePromise.ts#L3)

___

### deepCompareObjects

▸ **deepCompareObjects**(`...objects`): `boolean`

**`Description`**

It compares two objects and returns true if they are equal, false if they are not

**`Example`**

```ts
deepCompareObjects({a:1}, {a:1}) => true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...objects` | `object`[] | object[] |

#### Returns

`boolean`

A function that takes an array of objects and returns a boolean.

#### Defined in

[src/utils/object/deepCompareObjects.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/deepCompareObjects.ts#L7)

___

### delay

▸ **delay**<`T`\>(`cb`, `time?`, `...args`): `Promise`<`T`\>

**`Description`**

Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cb` | (...`args`: `any`[]) => `T` | `undefined` |
| `time` | `number` | `200` |
| `...args` | `any`[] | `undefined` |

#### Returns

`Promise`<`T`\>

#### Defined in

[src/utils/functions/delay.ts:4](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/delay.ts#L4)

___

### excludeKeys

▸ **excludeKeys**(`object`, `predicate`): `Object`

"It returns a new object with the same keys as the original object, except for the keys that match
the predicate."

The predicate is a function that takes three arguments: the key, the value, and the object. It
returns true if the key should be included in the new object, and false if it should be excluded

**`Example`**

```ts
excludeKeys({
   foo: true,
   bar: false
}, (key, value) => value === true) => {bar: false}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | The object to filter. |
| `predicate` | (`key`: `string` \| `symbol`, `value`: `any`, `object`: {}) => `boolean` | A function that returns true if the key should be included. |

#### Returns

`Object`

#### Defined in

[src/utils/object/excludeKeys.ts:16](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/excludeKeys.ts#L16)

___

### excludeQueryParamFromUrl

▸ **excludeQueryParamFromUrl**(`urlOrQuery`, `filter`): `string`

**`Description`**

Exclude query parameters from a URL.

**`Example`**

```ts
excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); => 'https://foo.bar?bar=2#hello'
```

**`Example`**

```ts
excludeQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); => 'https://foo.bar?foo=1#hello'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrQuery` | `string` |
| `filter` | `string`[] \| (`key`: `string`, `value`: `string`) => `boolean` |

#### Returns

`string`

#### Defined in

[src/utils/route/excludeQueryParamFromUrl.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/excludeQueryParamFromUrl.ts#L8)

___

### extractQueryFromUrl

▸ **extractQueryFromUrl**(`input`): `string`

**`Description`**

It takes a URL and returns the query string

**`Example`**

```ts
extractQueryFromUrl("https://www.youtube.com/watch?v=ABCD#anchor") => "v=ABCD"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The URL to extract the query from. |

#### Returns

`string`

The query string from the URL.

#### Defined in

[src/utils/route/extractQueryFromUrl.ts:9](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/extractQueryFromUrl.ts#L9)

___

### extractUrlsFromString

▸ **extractUrlsFromString**(`str`): `string`[]

**`Description`**

will extract all urls from a long string and return a list of the urls.

**`Example`**

```ts
"Hello, visit me at www.example.com!" => ["www.example.com"]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`[]

#### Defined in

[src/utils/string/extractUrlsFromString.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/extractUrlsFromString.ts#L7)

___

### fastDeepEqual

▸ **fastDeepEqual**<`T`\>(`a`, `b`): a is T

**`Description`**

The fastest deep equal with ES6 Map, Set and Typed arrays support.
the same as fast-deep-equal package.

**`Example`**

```ts
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `T` |

#### Returns

a is T

#### Defined in

[src/utils/object/fastDeepEqual.ts:11](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/fastDeepEqual.ts#L11)

___

### generateGuid

▸ **generateGuid**(): `string`

**`Description`**

Will generate a s4 Guid

**`Example`**

```ts
generateGuid() => "741baba3-1efc-b52e-5d9c-75b1fc80395a"
```

#### Returns

`string`

#### Defined in

[src/utils/general/generateGuid.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/general/generateGuid.ts#L6)

___

### getAsciiCodeForChar

▸ **getAsciiCodeForChar**(`char`): `number`

**`Description`**

It takes a string and returns the ASCII code for the first character in the string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `char` | `string` | The character to get the ASCII code for. |

#### Returns

`number`

The ASCII code for the character.

#### Defined in

[src/utils/string/getAsciiCodeForChar.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getAsciiCodeForChar.ts#L6)

___

### getAsciiSumFromString

▸ **getAsciiSumFromString**(`str`): `number`

**`Description`**

It takes a string, splits it into an array of characters, then reduces the array to a single number
by adding the ASCII code of each character to the previous value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string |

#### Returns

`number`

The sum of the ASCII codes for each character in the string.

#### Defined in

[src/utils/string/getAsciiSumFromString.ts:9](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getAsciiSumFromString.ts#L9)

___

### getAverage

▸ **getAverage**(`...args`): `number`

**`Description`**

The function takes a variable number of arguments, and returns the average of those arguments

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `number`[] | number[] |

#### Returns

`number`

The sum of the arguments divided by the number of arguments.

#### Defined in

[src/utils/number/getAverage.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/number/getAverage.ts#L8)

___

### getBase64FromFile

▸ **getBase64FromFile**(`file`): `Promise`<`ArrayBuffer` \| `string`\>

**`Example`**

```ts
getBase64FromFile(new File([""], "filename")) => "data:application/octet-stream;base64,"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |

#### Returns

`Promise`<`ArrayBuffer` \| `string`\>

#### Defined in

[src/utils/file/getBase64FromFile.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/file/getBase64FromFile.ts#L6)

___

### getFileExtensionFromString

▸ **getFileExtensionFromString**(`str`): `string`

**`Description`**

It takes a string and get the extension file type.

**`Example`**

```ts
getFileExtensionFromString("fileName.txt") => txt
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to get the file extension from. |

#### Returns

`string`

The file extension of the string.

#### Defined in

[src/utils/string/getFileExtensionFromString.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getFileExtensionFromString.ts#L7)

___

### getFirstNLetters

▸ **getFirstNLetters**(`str`, `n?`): `string`

**`Description`**

Will return the first n number of letters.

**`Example`**

```ts
getFirstNLetters('javascript', 3) => jav
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `n?` | `number` | `1` |

#### Returns

`string`

#### Defined in

[src/utils/string/getFirstNLetters.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getFirstNLetters.ts#L8)

___

### getGlobalThis

▸ **getGlobalThis**(): typeof `globalThis`

**`Description`**

will return the globalThis according to the runtime environment

#### Returns

typeof `globalThis`

#### Defined in

[src/utils/general/getGlobalThis.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/general/getGlobalThis.ts#L5)

___

### getHashFromString

▸ **getHashFromString**(`url`): `string`

**`Description`**

will return the hash (fragment) part of a url

**`Example`**

```ts
"www.example.com#link" => "#link"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/string/getHashFromString.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getHashFromString.ts#L5)

___

### getNameInitials

▸ **getNameInitials**(`name`, `length?`): `string`

**`Description`**

Will return the initials of the passed name at provided length;

**`Example`**

```ts
visual studio => vs;
```

**`Example`**

```ts
JavaScript => JS
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `length?` | `number` | `1` |

#### Returns

`string`

#### Defined in

[src/utils/string/getNameInitials.ts:12](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getNameInitials.ts#L12)

___

### getNumberFromString

▸ **getNumberFromString**(`strOrNum`): `number`

**`Description`**

Takes the number out of the string and returns number
if no number exists will return infinity

**`Example`**

```ts
getNumberFromString("3.35px") => 3.35;
```

**`Example`**

```ts
getNumberFromString("3.35") => 3.35;
```

**`Example`**

```ts
getNumberFromString("string") => infinity;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strOrNum` | `Key` | string \| number |

#### Returns

`number`

#### Defined in

[src/utils/string/getNumberFromString.ts:12](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/getNumberFromString.ts#L12)

___

### getSmallestArrInObj

▸ **getSmallestArrInObj**(`obj`): `Object`

**`Description`**

will return the smallest array in record or object

**`Example`**

```ts
getSmallestArrInObj({a:[1,2,3], b:[1,2,3,4,5]}) => {a:[1,2,3]}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | {} \| `Record`<`string`, `any`[]\> |

#### Returns

`Object`

#### Defined in

[src/utils/object/getSmallestArrInObj.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/getSmallestArrInObj.ts#L6)

___

### getSum

▸ **getSum**(`...args`): `number`

**`Description`**

The sum function takes a variable number of arguments, and returns the sum of all the arguments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `number`[] | number[] |

#### Returns

`number`

#### Defined in

[src/utils/number/getSum.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/number/getSum.ts#L5)

___

### getWindowObj

▸ **getWindowObj**(): `Window` & typeof `globalThis` \| {}

#### Returns

`Window` & typeof `globalThis` \| {}

#### Defined in

[src/utils/browser/getWindowObj.ts:3](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/browser/getWindowObj.ts#L3)

___

### has

▸ **has**(`objectType`, `key`): `boolean`

**`Description`**

Shortcut function for checking if an object has a given property directly on itself.

**`Example`**

```ts
has({a:1, b:2}, ["a"]) => true
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectType` | {} \| `Function` \| [] |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/object/has.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/has.ts#L6)

___

### hashString

▸ **hashString**(`str`): `number`

**`Description`**

It takes a string, converts it to an array of ASCII codes, sums them up, and returns the sum

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to hash |

#### Returns

`number`

The sum of the ASCII values of the characters in the string.

#### Defined in

[src/utils/string/hashString.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/hashString.ts#L8)

___

### includeKeys

▸ **includeKeys**(`object`, `predicate`): `Object`

**`Description`**

"It returns a new object that contains only the enumerable properties of the original object that
match the predicate."

The predicate can be either an array of keys or a function that takes the key, value, and object as
arguments

**`Example`**

```ts
includeKeys({
   foo: true,
   bar: false
}, (key, value) => value === true) => {foo: true}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | The object to copy enumerable properties from. |
| `predicate` | `string`[] \| (`key`: `string` \| `symbol`, `value`: `string`, `object`: {}) => `boolean` | A function that returns true if the key should be included in the result. |

#### Returns

`Object`

A new object with the same enumerable properties as the original object, but with the
values filtered by the predicate.

#### Defined in

[src/utils/object/includeKeys.ts:17](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/includeKeys.ts#L17)

___

### isArray

▸ **isArray**(`value`): value is []

**`Description`**

The function isArray takes a value and returns true if the value is an array, otherwise it returns
false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknown |

#### Returns

value is []

#### Defined in

[src/utils/validation/isArray.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isArray.ts#L6)

___

### isArrayOfStrings

▸ **isArrayOfStrings**(`value`): value is string[]

**`Description`**

It returns true if the value is an array of strings, otherwise it returns false

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is string[]

A function that takes a value and returns a boolean.

#### Defined in

[src/utils/validation/isArrayOfStrings.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isArrayOfStrings.ts#L6)

___

### isBiggerThan

▸ **isBiggerThan**(`a`, `b`): `boolean`

**`Example`**

```ts
isBiggerThan(1,2) => false
```

**`Description`**

The function isBiggerThan takes two arguments, a and b, and returns true if a is greater than b,
otherwise it returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Key` |
| `b` | `Key` |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isBiggerThan.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isBiggerThan.ts#L8)

___

### isBoolean

▸ **isBoolean**(`param`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `any` |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isBoolean.ts:1](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isBoolean.ts#L1)

___

### isBrowser

▸ **isBrowser**(): `boolean`

**`Description`**

Return true if the current environment is running on browser.

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isBrowser.ts:4](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isBrowser.ts#L4)

___

### isDateType

▸ **isDateType**(`value`): value is Date

**`Description`**

If the value is truthy and is a Date type, then return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | any |

#### Returns

value is Date

#### Defined in

[src/utils/validation/isDateType.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isDateType.ts#L5)

___

### isEmail

▸ **isEmail**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isEmail.ts:4](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isEmail.ts#L4)

___

### isEmpty

▸ **isEmpty**(`input?`): `boolean`

**`Description`**

It checks if the input is empty.

**`Example`**

```ts
isEmpty({}) => true;
```

**`Example`**

```ts
isEmpty([]) => true;
```

**`Example`**

```ts
isEmpty(0) => true;
```

**`Example`**

```ts
isEmpty(false) => true;
```

**`Example`**

```ts
isEmpty(true) => false;
```

**`Example`**

```ts
isEmpty("") => true;
```

**`Example`**

```ts
isEmpty("") => true;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | `string` \| `number` \| `boolean` \| {} \| [] |

#### Returns

`boolean`

A function that takes a value and returns a boolean.

#### Defined in

[src/utils/validation/isEmpty.ts:14](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isEmpty.ts#L14)

___

### isFunction

▸ **isFunction**(`value`): value is Function

**`Description`**

If the type of the value is a function, then return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknown |

#### Returns

value is Function

#### Defined in

[src/utils/validation/isFunction.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isFunction.ts#L5)

___

### isLength

▸ **isLength**(`input?`): `boolean`

**`Description`**

It returns true if the object or array is not empty, false otherwise

**`Example`**

```ts
isLength([1,2]) => true
```

**`Example`**

```ts
isLength([]) => false
```

**`Example`**

```ts
isLength(null) => false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | `any` |

#### Returns

`boolean`

A function that takes an unknown type and returns a boolean.

#### Defined in

[src/utils/validation/isLength.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isLength.ts#L10)

___

### isNull

▸ **isNull**(`val`): val is null

It checks if the value is null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | unknown |

#### Returns

val is null

#### Defined in

[src/utils/validation/isNull.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isNull.ts#L5)

___

### isNullOrEmptyString

▸ **isNullOrEmptyString**(`value?`): `boolean`

**`Description`**

It returns true if the value is null, undefined, or an empty string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `string` | The value to check. |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isNullOrEmptyString.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isNullOrEmptyString.ts#L8)

___

### isNullOrUndefined

▸ **isNullOrUndefined**(`val`): val is null

**`Description`**

checks if the passed value is null or undefined

**`Example`**

```ts
isNullOrUndefined("value") => false
```

**`Example`**

```ts
isNullOrUndefined(null) => true
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | unknown |

#### Returns

val is null

boolean

#### Defined in

[src/utils/validation/isNullOrUndefined.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isNullOrUndefined.ts#L8)

___

### isNumber

▸ **isNumber**(`value`): value is number

**`Description`**

If the value is not a number, then it is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | any - The value to be checked |

#### Returns

value is number

#### Defined in

[src/utils/validation/isNumber.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isNumber.ts#L5)

___

### isObject

▸ **isObject**(`val`): val is Object

**`Description`**

If the type of the value is a object ({}), return true, otherwise return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `unknown` |

#### Returns

val is Object

#### Defined in

[src/utils/validation/isObject.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isObject.ts#L5)

___

### isSmallerThan

▸ **isSmallerThan**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Key` |
| `b` | `Key` |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isSmallerThan.ts:3](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isSmallerThan.ts#L3)

___

### isString

▸ **isString**(`value`): value is string

**`Description`**

If the type of the value is a string, return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | unknown |

#### Returns

value is string

#### Defined in

[src/utils/validation/isString.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isString.ts#L5)

___

### isTruthy

▸ **isTruthy**(`value`): value is true

**`Description`**

This function takes a value and returns true if the value is truthy, otherwise it returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | any |

#### Returns

value is true

#### Defined in

[src/utils/validation/isTruthy.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isTruthy.ts#L5)

___

### isURL

▸ **isURL**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isURL.ts:4](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isURL.ts#L4)

___

### isUndefined

▸ **isUndefined**(`val`): val is undefined

**`Description`**

If the value is undefined, return true, otherwise return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `unknown` | unknown - The value to check if it's undefined. |

#### Returns

val is undefined

#### Defined in

[src/utils/validation/isUndefined.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isUndefined.ts#L5)

___

### isWhiteSpace

▸ **isWhiteSpace**(`char`): `boolean`

**`Description`**

will check if the parameter is a white space;

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`boolean`

#### Defined in

[src/utils/validation/isWhiteSpace.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/validation/isWhiteSpace.ts#L7)

___

### joinObjects

▸ **joinObjects**<`T`\>(`...args`): {} \| `T`

**`Description`**

will return a new object that combines all of the passed objects as new copy (not reference as Object.assign).

**`Example`**

```ts
joinObjects({a:1},{b:2}) => {a:1, b:2}
```

**`Example`**

```ts
joinObjects(({ a: 1 }, { b: 2 })) => { a: 1, b: 2 }
```

**`Example`**

```ts
joinObjects(({ a: 1 }, null || undefined || !object)) => { a: 1 }
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | ({} \| `T`)[] |

#### Returns

{} \| `T`

#### Defined in

[src/utils/object/joinObjects.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/object/joinObjects.ts#L7)

___

### mapStringToColorFromArr

▸ **mapStringToColorFromArr**(`str`, `colorsArr`): `string`

**`Description`**

It takes a string and an array of colors and returns a color from the array based on the string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string you want to map to a color |
| `colorsArr` | `string`[] | an array of colors |

#### Returns

`string`

A string

#### Defined in

[src/utils/string/mapStringToColorFromArr.ts:9](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/mapStringToColorFromArr.ts#L9)

___

### memoize

▸ **memoize**<`T`\>(`func`, `hasher`): (`key`: `string`) => `any`

**`Description`**

Memoize an expensive function by storing its results.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (...`args`: `any`[]) => `T` |
| `hasher` | `any` |

#### Returns

`fn`

▸ (`key`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

`any`

| Name | Type |
| :------ | :------ |
| `cache` | {} |

#### Defined in

[src/utils/functions/memoize.ts:4](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/memoize.ts#L4)

___

### multiplyAll

▸ **multiplyAll**(`values`, `factor?`): `number`[] \| `undefined`

**`Description`**

If the values are undefined, return undefined, otherwise return the values multiplied by the factor.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `values` | `number`[] | `undefined` | number[] \| undefined |
| `factor?` | `number` | `1` | number = 1 |

#### Returns

`number`[] \| `undefined`

An array of numbers or undefined.

#### Defined in

[src/utils/number/multiplyAll.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/number/multiplyAll.ts#L7)

___

### nFormatter

▸ **nFormatter**(`num`): `string`

**`Description`**

it will format numbers to string if its bigger than 1000 with a K, million M and so on.

**`Example`**

```ts
nFormatter(1000) => "1K"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

[src/utils/string/nFormatter.ts:5](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/nFormatter.ts#L5)

___

### navigateObjWithString

▸ **navigateObjWithString**(`string`, `object`, `navigationChr?`): `any`

**`Description`**

It takes a string, an object, and a navigation character, and returns the value of the object at the
string's path.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `string` | `string` | `undefined` | the string you want to navigate with |
| `object` | `Object` | `undefined` | {}, |
| `navigationChr?` | `string` | `'.'` | string = '.' |

#### Returns

`any`

The value of the key in the object.

#### Defined in

[src/utils/string/navigateObjWithString.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/navigateObjWithString.ts#L10)

___

### paramsToObject

▸ **paramsToObject**(`entries`): `Object`

**`Description`**

It takes a URLSearchParams object and returns a normal js object

**`Example`**

```ts
paramsToObject(new URLSearchParams()) => {}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | `URLSearchParams` |

#### Returns

`Object`

#### Defined in

[src/utils/general/paramsToObject.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/general/paramsToObject.ts#L6)

___

### parse

▸ **parse**(`query`, `options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |
| `options` | `any` |

#### Returns

`any`

#### Defined in

[src/utils/route/parse.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/parse.ts#L10)

___

### parseDate

▸ **parseDate**(`date`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

`Date`

#### Defined in

[src/utils/string/parseDate.ts:2](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/parseDate.ts#L2)

___

### parseJwt

▸ **parseJwt**(`token`): `any`

**`Description`**

The function takes a JWT token and returns the decoded payload as a JSON object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The JWT token that you want to parse. |

#### Returns

`any`

The JSON payload of the JWT.

#### Defined in

[src/utils/string/parseJwt.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/parseJwt.ts#L6)

___

### parseNumber

▸ **parseNumber**(`number`): `string`

It takes a string, removes all non-numeric characters, and returns the result

**`Example`**

```ts
parseNumber("123 ") => 123
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `string` | string - The string to be parsed. |

#### Returns

`string`

A function that takes a string and returns a string with all non-digit characters removed.

#### Defined in

[src/utils/string/parseNumber.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/parseNumber.ts#L8)

___

### parseString

▸ **parseString**(`str`, `config?`): `number` \| `undefined` \| ``null`` \| `string` \| `boolean`

**`Description`**

It takes a string and returns a number, boolean, null, undefined, or a string that has "undefined" as string
and returns the actual type.
if "123" will return the number 123 and so on.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` \| `number` | `undefined` | string \| null \| undefined \| number |
| `config` | `Object` | `undefined` | { |
| `config.includeWholeStr` | `boolean` | `false` | - |
| `config.parseStrStartsWithZero` | `boolean` | `true` | - |

#### Returns

`number` \| `undefined` \| ``null`` \| `string` \| `boolean`

#### Defined in

[src/utils/string/parseString.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/parseString.ts#L8)

___

### parseUrl

▸ **parseUrl**(`url`, `options?`): `ParsedUrl`

**`Description`**

Extract the URL and the query string as an object.
If the `parseFragmentIdentifier` option is `true`, the object will also contain a `fragmentIdentifier` property.

**`Example`**

```
import queryString from 'query-string';

queryString.parseUrl('https://foo.bar?foo=bar');
//=> {url: 'https://foo.bar', query: {foo: 'bar'}}

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | `ParseOptions` |

#### Returns

`ParsedUrl`

#### Defined in

[src/utils/route/parseUrl.ts:21](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/parseUrl.ts#L21)

___

### pickQueryParamFromUrl

▸ **pickQueryParamFromUrl**(`urlOrQuery`, `filter`): `string`

**`Description`**

Pick query parameters from a URL.

**`Example`**

```ts
pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', ['foo']); => 'https://foo.bar?foo=1#hello';
```

**`Example`**

```ts
pickQueryParamFromUrl('https://foo.bar?foo=1&bar=2#hello', (name, value) => value === 2, {parseNumbers: true}); => 'https://foo.bar?bar=2#hello';
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `urlOrQuery` | `string` |
| `filter` | `string`[] \| (`key`: `string` \| `symbol`, `value`: `string`, `object`: {}) => `boolean` |

#### Returns

`string`

#### Defined in

[src/utils/route/pickQueryParamFromUrl.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/pickQueryParamFromUrl.ts#L10)

___

### removeEventListener

▸ **removeEventListener**<`T`\>(`obj`, `...args`): `void`

**`Description`**

will check if the passed object accepts removeEventListener and add it.

**`Example`**

```ts
removeEventListener(target.current, "touchend", preventDefault);
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Window` \| `EventTarget` \| `Document` \| `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `...args` | [`string`, `Fn`, ...any[]] \| `Parameters`<`T`[``"removeEventListener"``]\>[] |

#### Returns

`void`

#### Defined in

[src/utils/browser/removeEventListener.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/browser/removeEventListener.ts#L7)

___

### removeHashFromUrl

▸ **removeHashFromUrl**(`input`): `string`

**`Description`**

It takes a string, finds the first occurrence of the hash character, and returns the string without
the hash character and everything after it.

**`Example`**

```ts
removeHashFromUrl("www.example.com/a#link") => "www.example.com/a"
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/route/removeHashFromUrl.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/removeHashFromUrl.ts#L6)

___

### sortArr

▸ **sortArr**<`T`\>(`arr`, `property?`, `desc?`): `T`[]

**`Description`**

It sorts an array of objects or strings or numbers, and if the array is an array of objects, it can
sort by a property of the objects.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `string` \| `number` \| {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | The array to be sorted |
| `property?` | `string` | The property of the object to sort by. |
| `desc?` | `boolean` | boolean - if true, the array will be sorted in descending order |

#### Returns

`T`[]

An array of objects sorted by the property passed in.

#### Defined in

[src/utils/array/sortArr.ts:13](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/array/sortArr.ts#L13)

___

### sortByMultiProperties

▸ **sortByMultiProperties**<`T`\>(`arr`, `proprieties`): `T`[]

**`Description`**

It takes an array of objects and sorts them by array of multiple properties.
if the property starts with "-" then it will be descending order otherwize ascending order

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | {} |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | `T`[] | the array to be sorted |
| `proprieties` | `string`[] | an array of strings, each string is a property name |

#### Returns

`T`[]

#### Defined in

[src/utils/array/sortByMultiProperties.ts:7](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/array/sortByMultiProperties.ts#L7)

___

### splitOnFirst

▸ **splitOnFirst**(`string`, `separator`): `string`[]

**`Description`**

It takes a string and a separator and returns an array of two strings, the first being the string up
to the separator and the second being the string after the separator.

**`Example`**

```ts
splitOnFirst('key:value:value2', ':') => ['key', 'value:value2']
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | string |
| `separator` | `string` | The separator to split on. |

#### Returns

`string`[]

#### Defined in

[src/utils/string/splitOnFirst.ts:8](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/splitOnFirst.ts#L8)

___

### splitUpperCase

▸ **splitUpperCase**(`str`): `string`[]

**`Description`**

It splits a string into an array of strings, where each string is a word, number, or capitalized
word

**`Example`**

```ts
splitUpperCase("JavaScript") => ["Java", "Script"]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string - The string to split |

#### Returns

`string`[]

An array of strings.

#### Defined in

[src/utils/string/splitUpperCase.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/splitUpperCase.ts#L10)

___

### stringToHexColor

▸ **stringToHexColor**(`str`): `string`

**`Description`**

It takes a string, converts it to a number, then converts that number to a color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to convert to a color. |

#### Returns

`string`

A string of the form #RRGGBB.

#### Defined in

[src/utils/string/stringToHexColor.ts:6](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/stringToHexColor.ts#L6)

___

### stringToHslColor

▸ **stringToHslColor**(`string`, `saturation?`, `lightness?`): `string`

**`Description`**

It takes a string, converts it to a number, and then uses that number to generate a color.

The function is based on the [HSL color model](https://en.wikipedia.org/wiki/HSL_and_HSV).

The function takes three arguments:

- `string`: The string to convert to a color.
- `saturation`: The saturation of the color.
- `lightness`: The lightness of the color.

The function returns a string in the format `hsl(hue, saturation, lightness)`.

The function uses the [Fowler–Noll–Vo hash
function](https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function) to convert the
string to a

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `string` | `string` | `undefined` | The string to convert to a color. |
| `saturation?` | `number` | `100` | 0-100 |
| `lightness?` | `number` | `75` | 0-100 |

#### Returns

`string`

A string of the form `hsl(0, 100%, 75%)`

#### Defined in

[src/utils/string/stringToHslColor.ts:22](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/string/stringToHslColor.ts#L22)

___

### stringifyUrl

▸ **stringifyUrl**(`object`, `options?`): `string`

**`Description`**

Stringify an object into a URL with a query string and sorting the keys. The inverse of .parseUrl();

**`Example`**

```
queryString.stringifyUrl({url: 'https://foo.bar', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({url: 'https://foo.bar?foo=baz', query: {foo: 'bar'}});
//=> 'https://foo.bar?foo=bar'

queryString.stringifyUrl({
   url: 'https://foo.bar',
   query: {
       top: 'foo'
   },
   fragmentIdentifier: 'bar'
});
//=> 'https://foo.bar?top=foo#bar'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `UrlObject` |
| `options?` | `StringifyOptions` |

#### Returns

`string`

#### Defined in

[src/utils/route/stringifyUrl.ts:27](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/route/stringifyUrl.ts#L27)

___

### throttlePromise

▸ **throttlePromise**<`F`\>(`func`, `waitFor?`): (...`args`: `Parameters`<`F`\>) => `Promise`<`ReturnType`<`F`\>\>

**`Description`**

it will throttlePromise the call of the function param to wait for n seconds.

**`Example`**

```ts
const func = (hello: string) => { console.log(new Date().getTime(), '>>>', hello) }
const thrFunc = throttlePromise(func, 1000)
thrFunc('hello 1')
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | `F` | `undefined` |
| `waitFor` | `number` | `200` |

#### Returns

`fn`

▸ (`...args`): `Promise`<`ReturnType`<`F`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`F`\> |

##### Returns

`Promise`<`ReturnType`<`F`\>\>

#### Defined in

[src/utils/functions/throttlePromise.ts:9](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/functions/throttlePromise.ts#L9)

___

### toArray

▸ **toArray**(`source`): `any`[]

**`Description`**

If the source is null or undefined, return an empty array, otherwise return the source as an array.

**`Example`**

```ts
toArray(null) => []
```

**`Example`**

```ts
toArray([21]) => []
```

**`Example`**

```ts
toArray({}) => [{}]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `unknown` | unknown |

#### Returns

`any`[]

An array.

#### Defined in

[src/utils/general/toArray.ts:10](https://github.com/AhmadHddad/h-utils/blob/a85d058/src/utils/general/toArray.ts#L10)
