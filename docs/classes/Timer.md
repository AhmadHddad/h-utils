[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Timer

# Class: Timer

Defined in: [src/classes/Timer.ts:15](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L15)

## See

https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript
 Timer

## Description

Creates a timer so it calculates the time between start and end, so you can
check time in ms.

## Example

```ts
`
 * const timer = new Timer(initialStartTimer (optional));
timer.start();
//after 1 second
timer.stop();
console.log(timer.getTime()) // 1000

`
```

## Constructors

### Constructor

> **new Timer**(`initialStartTime`): `Timer`

Defined in: [src/classes/Timer.ts:20](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L20)

#### Parameters

##### initialStartTime

`number` = `0`

#### Returns

`Timer`

## Properties

### isRunning

> **isRunning**: `boolean` = `false`

Defined in: [src/classes/Timer.ts:16](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L16)

## Methods

### \_getTimeElapsedSinceLastStart()

> **\_getTimeElapsedSinceLastStart**(): `number`

Defined in: [src/classes/Timer.ts:24](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L24)

#### Returns

`number`

***

### getTime()

> **getTime**(): `number`

Defined in: [src/classes/Timer.ts:63](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L63)

#### Returns

`number`

***

### reset()

> **reset**(): `void`

Defined in: [src/classes/Timer.ts:52](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L52)

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [src/classes/Timer.ts:32](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L32)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/classes/Timer.ts:42](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/Timer.ts#L42)

#### Returns

`void`
