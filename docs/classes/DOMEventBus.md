[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / DOMEventBus

# Class: DOMEventBus

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

### new DOMEventBus()

> **new DOMEventBus**(`eventBusContainer`?): [`DOMEventBus`](DOMEventBus.md)

#### Parameters

• **eventBusContainer?**: [`Nullable`](../type-aliases/Nullable.md)\<`HTMLElement` \| `DocumentFragment`\>

#### Returns

[`DOMEventBus`](DOMEventBus.md)

#### Source

[src/classes/DOMEventBus.ts:47](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/DOMEventBus.ts#L47)

## Properties

### document

> `private` **document**: `Document`

#### Source

[src/classes/DOMEventBus.ts:45](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/DOMEventBus.ts#L45)

***

### eventBusContainer

> `private` **eventBusContainer**: `HTMLElement` \| `DocumentFragment`

#### Source

[src/classes/DOMEventBus.ts:44](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/DOMEventBus.ts#L44)

## Methods

### publish()

> **publish**(`event`, `data`?): `void`

#### Parameters

• **event**: `string`

• **data?**: `any`

#### Returns

`void`

#### Source

[src/classes/DOMEventBus.ts:64](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/DOMEventBus.ts#L64)

***

### subscribe()

> **subscribe**(`event`, `callback`): `void`

#### Parameters

• **event**: `string`

• **callback**: [`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`

#### Source

[src/classes/DOMEventBus.ts:54](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/DOMEventBus.ts#L54)

***

### unsubscribe()

> **unsubscribe**(`event`, `callback`): `void`

#### Parameters

• **event**: `string`

• **callback**: [`EventCallback`](../type-aliases/EventCallback.md)

#### Returns

`void`

#### Source

[src/classes/DOMEventBus.ts:59](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/DOMEventBus.ts#L59)
