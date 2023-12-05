[hd-utils](../README.md) / [Exports](../modules.md) / DOMEventBus

# Class: DOMEventBus

**`Description`**

DOMEventBus class implementation tailored for the Document Object Model (DOM). It serves as a centralized event manager, allowing components to subscribe to and publish custom events within a web application. With methods like subscribe, unsubscribe, and publish, it enables a modular and efficient communication system, enhancing the decoupling of components. This class leverages standard DOM event handling mechanisms, such as addEventListener and dispatchEvent, to facilitate seamless interaction and information exchange between different parts of a web application.

**`Example`**

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

## Table of contents

### Constructors

- [constructor](DOMEventBus.md#constructor)

### Properties

- [eventBusContainer](DOMEventBus.md#eventbuscontainer)

### Methods

- [publish](DOMEventBus.md#publish)
- [subscribe](DOMEventBus.md#subscribe)
- [unsubscribe](DOMEventBus.md#unsubscribe)

## Constructors

### constructor

• **new DOMEventBus**(`eventBusContainer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventBusContainer?` | [`Nullable`](../modules.md#nullable)<`HTMLElement` \| `DocumentFragment`\> |

#### Defined in

[src/classes/DOMEventBus.ts:44](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/DOMEventBus.ts#L44)

## Properties

### eventBusContainer

• `Private` **eventBusContainer**: `HTMLElement` \| `DocumentFragment`

#### Defined in

[src/classes/DOMEventBus.ts:42](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/DOMEventBus.ts#L42)

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

[src/classes/DOMEventBus.ts:61](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/DOMEventBus.ts#L61)

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

[src/classes/DOMEventBus.ts:51](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/DOMEventBus.ts#L51)

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

[src/classes/DOMEventBus.ts:56](https://github.com/AhmadHddad/h-utils/blob/6923f88/src/classes/DOMEventBus.ts#L56)
