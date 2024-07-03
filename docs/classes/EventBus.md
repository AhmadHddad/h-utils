[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / EventBus

# Class: EventBus

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

### new EventBus()

> **new EventBus**(): [`EventBus`](EventBus.md)

#### Returns

[`EventBus`](EventBus.md)

#### Source

[src/classes/EventBus.ts:30](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/EventBus.ts#L30)

## Properties

### listeners

> `private` **listeners**: `Map`\<`string`, [`EventCallback`](../type-aliases/EventCallback.md)[]\>

#### Source

[src/classes/EventBus.ts:28](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/EventBus.ts#L28)

## Methods

### publish()

> **publish**(`event`, `data`?): `void`

#### Parameters

• **event**: `string`

• **data?**: `any`

#### Returns

`void`

#### Source

[src/classes/EventBus.ts:63](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/EventBus.ts#L63)

***

### subscribe()

> **subscribe**(`event`, `callback`): `void`

#### Parameters

• **event**: `string`

• **callback**: [`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`

#### Source

[src/classes/EventBus.ts:36](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/EventBus.ts#L36)

***

### unsubscribe()

> **unsubscribe**(`event`, `callback`): `void`

#### Parameters

• **event**: `string`

• **callback**: [`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`

#### Source

[src/classes/EventBus.ts:50](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/EventBus.ts#L50)
