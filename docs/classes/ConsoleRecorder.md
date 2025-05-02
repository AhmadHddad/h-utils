[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / ConsoleRecorder

# Class: ConsoleRecorder

Defined in: [src/classes/ConsoleRecorder.ts:9](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L9)

## Description

A utility to record all logs 'error' | 'log' | 'info' | 'table' | 'warn', will save them to an object logRecord with time.

## Example

```ts
const logManager = new ConsoleRecorder();
console.log("foo");
logManager.logRecord.log // [{time:"123", value:["foo"]}]
```

## Constructors

### Constructor

> **new ConsoleRecorder**(`options?`): `ConsoleRecorder`

Defined in: [src/classes/ConsoleRecorder.ts:24](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L24)

#### Parameters

##### options?

###### error?

`boolean`

###### info?

`boolean`

###### log?

`boolean`

###### table?

`boolean`

###### warn?

`boolean`

#### Returns

`ConsoleRecorder`

## Accessors

### logRecord

#### Get Signature

> **get** **logRecord**(): [`ConsoleRecord`](../type-aliases/ConsoleRecord.md)

Defined in: [src/classes/ConsoleRecorder.ts:116](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L116)

##### Returns

[`ConsoleRecord`](../type-aliases/ConsoleRecord.md)

## Methods

### recordError()

> **recordError**(): `void`

Defined in: [src/classes/ConsoleRecorder.ts:60](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L60)

#### Returns

`void`

***

### recordInfo()

> **recordInfo**(): `void`

Defined in: [src/classes/ConsoleRecorder.ts:74](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L74)

#### Returns

`void`

***

### recordLog()

> **recordLog**(): `void`

Defined in: [src/classes/ConsoleRecorder.ts:46](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L46)

#### Returns

`void`

***

### recordTable()

> **recordTable**(): `void`

Defined in: [src/classes/ConsoleRecorder.ts:102](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L102)

#### Returns

`void`

***

### recordWarn()

> **recordWarn**(): `void`

Defined in: [src/classes/ConsoleRecorder.ts:88](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L88)

#### Returns

`void`

***

### stopAllRecord()

> **stopAllRecord**(): `void`

Defined in: [src/classes/ConsoleRecorder.ts:120](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/ConsoleRecorder.ts#L120)

#### Returns

`void`
