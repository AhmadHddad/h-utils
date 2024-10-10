[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / ConsoleRecorder

# Class: ConsoleRecorder

## Description

A utility to record all logs 'error' | 'log' | 'info' | 'table' | 'warn', will save them to an object logRecord with time.

## Example

```ts
const logManager = new ConsoleRecorder();
console.log("foo");
logManager.logRecord.log // [{time:"123", value:["foo"]}]
```

## Constructors

### new ConsoleRecorder()

> **new ConsoleRecorder**(`options`?): [`ConsoleRecorder`](ConsoleRecorder.md)

#### Parameters

• **options?**

• **options.error?**: `boolean`

• **options.info?**: `boolean`

• **options.log?**: `boolean`

• **options.table?**: `boolean`

• **options.warn?**: `boolean`

#### Returns

[`ConsoleRecorder`](ConsoleRecorder.md)

#### Source

[src/classes/ConsoleRecorder.ts:24](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L24)

## Properties

### \_logRecord

> `private` **\_logRecord**: [`ConsoleRecord`](../type-aliases/ConsoleRecord.md)

#### Source

[src/classes/ConsoleRecorder.ts:16](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L16)

***

### oldestError()

> `private` **oldestError**: (...`data`) => `void`(`message`?, ...`optionalParams`) => `void` = `console.error`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static)

#### Parameters

• ...**data**: `any`[]

#### Returns

`void`

Prints to `stderr` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args)).

```js
const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
```

If formatting elements (e.g. `%d`) are not found in the first string then
[`util.inspect()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilinspectobject-options) is called on each argument and the
resulting string values are concatenated. See [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args)
for more information.

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Source

[src/classes/ConsoleRecorder.ts:12](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L12)

***

### oldestInfo()

> `private` **oldestInfo**: (...`data`) => `void`(`message`?, ...`optionalParams`) => `void` = `console.info`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static)

#### Parameters

• ...**data**: `any`[]

#### Returns

`void`

The `console.info()` function is an alias for [log](ConsoleRecorder.md#oldestlog).

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Source

[src/classes/ConsoleRecorder.ts:11](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L11)

***

### oldestLog()

> `private` **oldestLog**: (...`data`) => `void`(`message`?, ...`optionalParams`) => `void` = `console.log`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static)

#### Parameters

• ...**data**: `any`[]

#### Returns

`void`

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args)).

```js
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args) for more information.

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Source

[src/classes/ConsoleRecorder.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L10)

***

### oldestTable()

> `private` **oldestTable**: (`tabularData`?, `properties`?) => `void`(`tabularData`, `properties`?) => `void` = `console.table`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static)

#### Parameters

• **tabularData?**: `any`

• **properties?**: `string`[]

#### Returns

`void`

Try to construct a table with the columns of the properties of `tabularData` (or use `properties`) and rows of `tabularData` and log it. Falls back to just
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

#### Parameters

• **tabularData**: `any`

• **properties?**: readonly `string`[]

Alternate properties for constructing the table.

#### Returns

`void`

#### Since

v10.0.0

#### Source

[src/classes/ConsoleRecorder.ts:14](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L14)

***

### oldestWarn()

> `private` **oldestWarn**: (...`data`) => `void`(`message`?, ...`optionalParams`) => `void` = `console.warn`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static)

#### Parameters

• ...**data**: `any`[]

#### Returns

`void`

The `console.warn()` function is an alias for [error](ConsoleRecorder.md#oldesterror).

#### Parameters

• **message?**: `any`

• ...**optionalParams?**: `any`[]

#### Returns

`void`

#### Since

v0.1.100

#### Source

[src/classes/ConsoleRecorder.ts:13](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L13)

## Accessors

### logRecord

> `get` **logRecord**(): [`ConsoleRecord`](../type-aliases/ConsoleRecord.md)

#### Returns

[`ConsoleRecord`](../type-aliases/ConsoleRecord.md)

#### Source

[src/classes/ConsoleRecorder.ts:116](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L116)

## Methods

### recordError()

> **recordError**(): `void`

#### Returns

`void`

#### Source

[src/classes/ConsoleRecorder.ts:60](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L60)

***

### recordInfo()

> **recordInfo**(): `void`

#### Returns

`void`

#### Source

[src/classes/ConsoleRecorder.ts:74](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L74)

***

### recordLog()

> **recordLog**(): `void`

#### Returns

`void`

#### Source

[src/classes/ConsoleRecorder.ts:46](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L46)

***

### recordTable()

> **recordTable**(): `void`

#### Returns

`void`

#### Source

[src/classes/ConsoleRecorder.ts:102](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L102)

***

### recordWarn()

> **recordWarn**(): `void`

#### Returns

`void`

#### Source

[src/classes/ConsoleRecorder.ts:88](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L88)

***

### stopAllRecord()

> **stopAllRecord**(): `void`

#### Returns

`void`

#### Source

[src/classes/ConsoleRecorder.ts:120](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/ConsoleRecorder.ts#L120)
