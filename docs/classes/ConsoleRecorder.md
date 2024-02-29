[hd-utils](../README.md) / [Exports](../modules.md) / ConsoleRecorder

# Class: ConsoleRecorder

**`Description`**

A utility to record all logs 'error' | 'log' | 'info' | 'table' | 'warn', will save them to an object logRecord with time.

**`Example`**

```ts
const logManager = new ConsoleRecorder();
console.log("foo");
logManager.logRecord.log // [{time:"123", value:["foo"]}]
```

## Table of contents

### Constructors

- [constructor](ConsoleRecorder.md#constructor)

### Properties

- [\_logRecord](ConsoleRecorder.md#_logrecord)
- [oldestError](ConsoleRecorder.md#oldesterror)
- [oldestInfo](ConsoleRecorder.md#oldestinfo)
- [oldestLog](ConsoleRecorder.md#oldestlog)
- [oldestTable](ConsoleRecorder.md#oldesttable)
- [oldestWarn](ConsoleRecorder.md#oldestwarn)

### Accessors

- [logRecord](ConsoleRecorder.md#logrecord)

### Methods

- [recordError](ConsoleRecorder.md#recorderror)
- [recordInfo](ConsoleRecorder.md#recordinfo)
- [recordLog](ConsoleRecorder.md#recordlog)
- [recordTable](ConsoleRecorder.md#recordtable)
- [recordWarn](ConsoleRecorder.md#recordwarn)
- [stopAllRecord](ConsoleRecorder.md#stopallrecord)

## Constructors

### constructor

• **new ConsoleRecorder**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.error?` | `boolean` |
| `options.info?` | `boolean` |
| `options.log?` | `boolean` |
| `options.table?` | `boolean` |
| `options.warn?` | `boolean` |

#### Defined in

[src/classes/ConsoleRecorder.ts:24](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L24)

## Properties

### \_logRecord

• `Private` **\_logRecord**: [`ConsoleRecord`](../modules.md#consolerecord)

#### Defined in

[src/classes/ConsoleRecorder.ts:16](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L16)

___

### oldestError

• `Private` **oldestError**: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` = `console.error`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

▸ (`message?`, `...optionalParams`): `void`

Prints to `stderr` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).

```js
const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
```

If formatting elements (e.g. `%d`) are not found in the first string then `util.inspect()` is called on each argument and the resulting string
values are concatenated. See `util.format()` for more information.

**`Since`**

v0.1.100

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

##### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:12](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L12)

___

### oldestInfo

• `Private` **oldestInfo**: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` = `console.info`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

▸ (`message?`, `...optionalParams`): `void`

The `console.info()` function is an alias for log.

**`Since`**

v0.1.100

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

##### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:11](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L11)

___

### oldestLog

• `Private` **oldestLog**: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` = `console.log`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

▸ (`message?`, `...optionalParams`): `void`

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html) (the arguments are all passed to `util.format()`).

```js
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See `util.format()` for more information.

**`Since`**

v0.1.100

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

##### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:10](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L10)

___

### oldestTable

• `Private` **oldestTable**: (`tabularData?`: `any`, `properties?`: `string`[]) => `void`(`tabularData`: `any`, `properties?`: readonly `string`[]) => `void` = `console.table`

#### Type declaration

▸ (`tabularData?`, `properties?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `tabularData?` | `any` |
| `properties?` | `string`[] |

##### Returns

`void`

▸ (`tabularData`, `properties?`): `void`

Try to construct a table with the columns of the properties of `tabularData`(or use `properties`) and rows of `tabularData` and log it. Falls back to just
logging the argument if it can't be parsed as tabular.

```js
// These can't be parsed as tabular data
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘
```

**`Since`**

v10.0.0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabularData` | `any` | - |
| `properties?` | readonly `string`[] | Alternate properties for constructing the table. |

##### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:14](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L14)

___

### oldestWarn

• `Private` **oldestWarn**: (...`data`: `any`[]) => `void`(`message?`: `any`, ...`optionalParams`: `any`[]) => `void` = `console.warn`

#### Type declaration

▸ (`...data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

##### Returns

`void`

▸ (`message?`, `...optionalParams`): `void`

The `console.warn()` function is an alias for error.

**`Since`**

v0.1.100

##### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

##### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:13](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L13)

## Accessors

### logRecord

• `get` **logRecord**(): [`ConsoleRecord`](../modules.md#consolerecord)

#### Returns

[`ConsoleRecord`](../modules.md#consolerecord)

#### Defined in

[src/classes/ConsoleRecorder.ts:116](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L116)

## Methods

### recordError

▸ **recordError**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:60](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L60)

___

### recordInfo

▸ **recordInfo**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:74](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L74)

___

### recordLog

▸ **recordLog**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:46](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L46)

___

### recordTable

▸ **recordTable**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:102](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L102)

___

### recordWarn

▸ **recordWarn**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:88](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L88)

___

### stopAllRecord

▸ **stopAllRecord**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/ConsoleRecorder.ts:120](https://github.com/AhmadHddad/h-utils/blob/c63bc83/src/classes/ConsoleRecorder.ts#L120)
