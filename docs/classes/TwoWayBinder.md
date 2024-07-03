[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / TwoWayBinder

# Class: TwoWayBinder

## Description

give the ability to create two-way data binding without any js library.

## Example

```ts
const inputElement = document.getElementById('textInput') as HTMLInputElement;
   const outputElement = document.getElementById('textDisplay') as HTMLElement;

   const binder = new TwoWayBinder(
       inputElement,
       outputElement
   );
```

## Constructors

### new TwoWayBinder()

> **new TwoWayBinder**(`inputElement`, `outputElement`, `eventType`): [`TwoWayBinder`](TwoWayBinder.md)

#### Parameters

• **inputElement**: `HTMLInputElement`

• **outputElement**: `HTMLElement`

• **eventType**: `string`= `'input'`

#### Returns

[`TwoWayBinder`](TwoWayBinder.md)

#### Source

[src/classes/TwoWayBinder.ts:18](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L18)

## Properties

### eventType

> `private` **eventType**: `string`

#### Source

[src/classes/TwoWayBinder.ts:16](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L16)

***

### inputElement

> `private` **inputElement**: `HTMLInputElement`

#### Source

[src/classes/TwoWayBinder.ts:14](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L14)

***

### outputElement

> `private` **outputElement**: `HTMLElement`

#### Source

[src/classes/TwoWayBinder.ts:15](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L15)

## Accessors

### value

> `get` **value**(): `string`

> `set` **value**(`newValue`): `void`

#### Parameters

• **newValue**: `string`

#### Returns

`string`

#### Source

[src/classes/TwoWayBinder.ts:51](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L51)

## Methods

### onInputChanged()

> `private` **onInputChanged**(): `void`

#### Returns

`void`

#### Source

[src/classes/TwoWayBinder.ts:34](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L34)

***

### updateElements()

> `private` **updateElements**(): `void`

#### Returns

`void`

#### Source

[src/classes/TwoWayBinder.ts:38](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L38)

***

### updateInput()

> **updateInput**(): `void`

#### Returns

`void`

#### Source

[src/classes/TwoWayBinder.ts:43](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L43)

***

### updateOutput()

> **updateOutput**(): `void`

#### Returns

`void`

#### Source

[src/classes/TwoWayBinder.ts:47](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/TwoWayBinder.ts#L47)
