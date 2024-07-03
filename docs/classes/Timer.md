[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Timer

# Class: Timer

## See

https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript
 Timer

## Description

Creates a timer so it calculates the time between start and end, so you can
check time in ms.

## Example

```ts
`
const timer = new Timer(initialStartTimer (optional));
timer.start();
//after 1 second
timer.stop();
console.log(timer.getTime()) // 1000

`
```

## Constructors

### new Timer()

> **new Timer**(`initialStartTime`): [`Timer`](Timer.md)

#### Parameters

• **initialStartTime**: `number`= `0`

#### Returns

[`Timer`](Timer.md)

#### Source

[src/classes/Timer.ts:20](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L20)

## Properties

### isRunning

> **isRunning**: `boolean` = `false`

#### Source

[src/classes/Timer.ts:16](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L16)

***

### overallTime

> `private` **overallTime**: `number` = `0`

#### Source

[src/classes/Timer.ts:18](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L18)

***

### startTime

> `private` **startTime**: `number` = `0`

#### Source

[src/classes/Timer.ts:17](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L17)

## Methods

### \_getTimeElapsedSinceLastStart()

> **\_getTimeElapsedSinceLastStart**(): `number`

#### Returns

`number`

#### Source

[src/classes/Timer.ts:24](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L24)

***

### getTime()

> **getTime**(): `number`

#### Returns

`number`

#### Source

[src/classes/Timer.ts:63](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L63)

***

### reset()

> **reset**(): `void`

#### Returns

`void`

#### Source

[src/classes/Timer.ts:52](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L52)

***

### start()

> **start**(): `void`

#### Returns

`void`

#### Source

[src/classes/Timer.ts:32](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L32)

***

### stop()

> **stop**(): `void`

#### Returns

`void`

#### Source

[src/classes/Timer.ts:42](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/Timer.ts#L42)
