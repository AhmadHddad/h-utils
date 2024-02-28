[hd-utils](../README.md) / [Exports](../modules.md) / LogManager

# Class: LogManager

**`Description`**

A utility to record all logs 'error' | 'log' | 'info' | 'table' | 'warn', will save them to an object logRecord with time.

**`Example`**

```ts
const logManager = new LogManager();
console.log("foo");
logManager.logRecord.log // [{time:"123", value:["foo"]}]
```

## Table of contents

### Constructors

- [constructor](LogManager.md#constructor)

### Properties

- [\_logRecord](LogManager.md#_logrecord)

### Accessors

- [logRecord](LogManager.md#logrecord)

## Constructors

### constructor

• **new LogManager**()

#### Defined in

[src/classes/LogManager.ts:18](https://github.com/AhmadHddad/h-utils/blob/c0d035d/src/classes/LogManager.ts#L18)

## Properties

### \_logRecord

• `Private` **\_logRecord**: [`LogRecord`](../modules.md#logrecord)

#### Defined in

[src/classes/LogManager.ts:10](https://github.com/AhmadHddad/h-utils/blob/c0d035d/src/classes/LogManager.ts#L10)

## Accessors

### logRecord

• `get` **logRecord**(): [`LogRecord`](../modules.md#logrecord)

#### Returns

[`LogRecord`](../modules.md#logrecord)

#### Defined in

[src/classes/LogManager.ts:77](https://github.com/AhmadHddad/h-utils/blob/c0d035d/src/classes/LogManager.ts#L77)
