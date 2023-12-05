[hd-utils](../README.md) / [Exports](../modules.md) / EventBus

# Class: EventBus

**`Description`**

EventBus implementation for handling custom events within a JavaScript application. It enables communication between different modules by providing methods for subscribing to, unsubscribing from, and publishing events. This fosters a decoupled architecture, allowing components to exchange information and trigger actions based on custom events.

**`Example`**

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

## Table of contents

### Constructors

- [constructor](EventBus.md#constructor)

### Properties

- [listeners](EventBus.md#listeners)

### Methods

- [publish](EventBus.md#publish)
- [subscribe](EventBus.md#subscribe)
- [unsubscribe](EventBus.md#unsubscribe)

## Constructors

### constructor

• **new EventBus**()

#### Defined in

[src/classes/EventBus.ts:30](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/EventBus.ts#L30)

## Properties

### listeners

• `Private` **listeners**: `Map`<`string`, [`EventCallback`](../modules.md#eventcallback)[]\>

#### Defined in

[src/classes/EventBus.ts:28](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/EventBus.ts#L28)

## Methods

### publish

▸ **publish**(`event`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `data?` | `any` |

#### Returns

`void`

#### Defined in

[src/classes/EventBus.ts:63](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/EventBus.ts#L63)

___

### subscribe

▸ **subscribe**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | [`EventCallback`](../modules.md#eventcallback) |

#### Returns

`void`

#### Defined in

[src/classes/EventBus.ts:36](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/EventBus.ts#L36)

___

### unsubscribe

▸ **unsubscribe**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | [`EventCallback`](../modules.md#eventcallback) |

#### Returns

`void`

#### Defined in

[src/classes/EventBus.ts:50](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/EventBus.ts#L50)
