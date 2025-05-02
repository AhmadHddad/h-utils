[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / EventBus

# Class: EventBus

Defined in: [src/classes/EventBus.ts:27](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/EventBus.ts#L27)

## Description

EventBus implementation for handling custom events within a JavaScript application. It enables communication between different modules by providing methods for subscribing to, unsubscribing from, and publishing events. This fosters a decoupled architecture, allowing components to exchange information and trigger actions based on custom events.

## Example

```ts
// Create an instance of the event bus
const eventBus = new EventBus();

// Subscribe to an event
function handleEvent1(data?: any) {
 console.log('Event 1 handled with data:', data);
}

eventBus.subscribe('event1', handleEvent1);

// Publish an event
eventBus.publish('event1', { message: 'Hello, Event 1!' });

// Unsubscribe from an event
eventBus.unsubscribe('event1', handleEvent1);

// The following publish won't trigger the handleEvent1 function because it's unsubscribed
eventBus.publish('event1', { message: 'This will not be handled.' });
```

## Constructors

### Constructor

> **new EventBus**(): `EventBus`

Defined in: [src/classes/EventBus.ts:30](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/EventBus.ts#L30)

#### Returns

`EventBus`

## Methods

### publish()

> **publish**(`event`, `data?`): `void`

Defined in: [src/classes/EventBus.ts:63](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/EventBus.ts#L63)

#### Parameters

##### event

`string`

##### data?

`any`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`event`, `callback`): `void`

Defined in: [src/classes/EventBus.ts:36](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/EventBus.ts#L36)

#### Parameters

##### event

`string`

##### callback

[`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`

***

### unsubscribe()

> **unsubscribe**(`event`, `callback`): `void`

Defined in: [src/classes/EventBus.ts:50](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/EventBus.ts#L50)

#### Parameters

##### event

`string`

##### callback

[`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`
