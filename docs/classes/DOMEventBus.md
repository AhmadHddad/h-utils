[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / DOMEventBus

# Class: DOMEventBus

Defined in: [src/classes/DOMEventBus.ts:43](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/DOMEventBus.ts#L43)

## Important

--Browser Only--

## Description

DOMEventBus class implementation tailored for the Document Object Model (DOM). It serves as a centralized event manager, allowing components to subscribe to and publish custom events within a web application. With methods like subscribe, unsubscribe, and publish, it enables a modular and efficient communication system, enhancing the decoupling of components. This class leverages standard DOM event handling mechanisms, such as addEventListener and dispatchEvent, to facilitate seamless interaction and information exchange between different parts of a web application.

## Example

```ts
// Create an instance of the DOM event bus with a specific element as the eventBusContainer
const specificElement = document.getElementById('myElement');
const specificElementEventBus = new DOMEventBus(specificElement);

// Subscribe to an event on the specific element
function handleSpecificElementEvent(event: CustomEvent) {
 console.log('Specific Element Event handled with data:', event.detail);
}

specificElementEventBus.subscribe('SpecificElementEvent', handleSpecificElementEvent);

// Publish an event on the specific element
specificElementEventBus.publish('SpecificElementEvent', { message: 'Hello, Specific Element Event!' });

// Unsubscribe from an event on the specific element
specificElementEventBus.unsubscribe('SpecificElementEvent', handleSpecificElementEvent);

// Create an instance of the DOM event bus with a DocumentFragment as the eventBusContainer
const defaultEventBus = new DOMEventBus();

// Subscribe to an event on the default event bus
function handleDefaultEvent(event: CustomEvent) {
 console.log('Default Event handled with data:', event.detail);
}

defaultEventBus.subscribe('DefaultEvent', handleDefaultEvent);

// Publish an event on the default event bus
defaultEventBus.publish('DefaultEvent', { message: 'Hello, Default Event!' });

// Unsubscribe from an event on the default event bus
defaultEventBus.unsubscribe('DefaultEvent', handleDefaultEvent);
```

## Constructors

### Constructor

> **new DOMEventBus**(`eventBusContainer?`): `DOMEventBus`

Defined in: [src/classes/DOMEventBus.ts:47](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/DOMEventBus.ts#L47)

#### Parameters

##### eventBusContainer?

`HTMLElement` | `DocumentFragment`

#### Returns

`DOMEventBus`

## Methods

### publish()

> **publish**(`event`, `data?`): `void`

Defined in: [src/classes/DOMEventBus.ts:64](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/DOMEventBus.ts#L64)

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

Defined in: [src/classes/DOMEventBus.ts:54](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/DOMEventBus.ts#L54)

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

Defined in: [src/classes/DOMEventBus.ts:59](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/DOMEventBus.ts#L59)

#### Parameters

##### event

`string`

##### callback

[`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`
