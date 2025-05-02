[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / TwoWayBinder

# Class: TwoWayBinder

Defined in: [src/classes/TwoWayBinder.ts:13](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/TwoWayBinder.ts#L13)

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

### Constructor

> **new TwoWayBinder**(`inputElement`, `outputElement`, `eventType`): `TwoWayBinder`

Defined in: [src/classes/TwoWayBinder.ts:18](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/TwoWayBinder.ts#L18)

#### Parameters

##### inputElement

`HTMLInputElement`

##### outputElement

`HTMLElement`

##### eventType

`string` = `'input'`

#### Returns

`TwoWayBinder`

## Accessors

### value

#### Get Signature

> **get** **value**(): `string`

Defined in: [src/classes/TwoWayBinder.ts:51](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/TwoWayBinder.ts#L51)

##### Returns

`string`

#### Set Signature

> **set** **value**(`newValue`): `void`

Defined in: [src/classes/TwoWayBinder.ts:55](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/TwoWayBinder.ts#L55)

##### Parameters

###### newValue

`string`

##### Returns

`void`

## Methods

### updateInput()

> **updateInput**(): `void`

Defined in: [src/classes/TwoWayBinder.ts:43](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/TwoWayBinder.ts#L43)

#### Returns

`void`

***

### updateOutput()

> **updateOutput**(): `void`

Defined in: [src/classes/TwoWayBinder.ts:47](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/TwoWayBinder.ts#L47)

#### Returns

`void`
