[hd-utils](../README.md) / [Exports](../modules.md) / Timer

# Class: Timer

**`See`**

https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript

**`Description`**

Creates a timer so it calculates the time between start and end, so you can
check time in ms.

**`Example`**

`
const timer = new Timer(initialStartTimer (optional));
timer.start();
//after 1 second
timer.stop();
console.log(timer.getTime()) // 1000

`

## Table of contents

### Constructors

- [constructor](Timer.md#constructor)

### Properties

- [isRunning](Timer.md#isrunning)
- [overallTime](Timer.md#overalltime)
- [startTime](Timer.md#starttime)

### Methods

- [\_getTimeElapsedSinceLastStart](Timer.md#_gettimeelapsedsincelaststart)
- [getTime](Timer.md#gettime)
- [reset](Timer.md#reset)
- [start](Timer.md#start)
- [stop](Timer.md#stop)

## Constructors

### constructor

• **new Timer**(`initialStartTime?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialStartTime` | `number` | `0` |

#### Defined in

[src/classes/Timer.ts:20](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L20)

## Properties

### isRunning

• **isRunning**: `boolean` = `false`

#### Defined in

[src/classes/Timer.ts:16](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L16)

___

### overallTime

• `Private` **overallTime**: `number` = `0`

#### Defined in

[src/classes/Timer.ts:18](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L18)

___

### startTime

• `Private` **startTime**: `number` = `0`

#### Defined in

[src/classes/Timer.ts:17](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L17)

## Methods

### \_getTimeElapsedSinceLastStart

▸ **_getTimeElapsedSinceLastStart**(): `number`

#### Returns

`number`

#### Defined in

[src/classes/Timer.ts:24](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L24)

___

### getTime

▸ **getTime**(): `number`

#### Returns

`number`

#### Defined in

[src/classes/Timer.ts:63](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L63)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/Timer.ts:52](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L52)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/Timer.ts:32](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L32)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/Timer.ts:42](https://github.com/AhmadHddad/h-utils/blob/4e81184/src/classes/Timer.ts#L42)
