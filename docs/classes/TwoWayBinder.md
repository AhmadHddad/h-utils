[hd-utils](../README.md) / [Exports](../modules.md) / TwoWayBinder

# Class: TwoWayBinder

**`Description`**

give the ability to create two-way data binding without any js library.

**`Example`**

```ts
const inputElement = document.getElementById('textInput') as HTMLInputElement;
   const outputElement = document.getElementById('textDisplay') as HTMLElement;

   const binder = new TwoWayBinder(
       inputElement,
       outputElement
   );
```

## Table of contents

### Constructors

- [constructor](TwoWayBinder.md#constructor)

### Properties

- [eventType](TwoWayBinder.md#eventtype)
- [inputElement](TwoWayBinder.md#inputelement)
- [outputElement](TwoWayBinder.md#outputelement)

### Accessors

- [value](TwoWayBinder.md#value)

### Methods

- [onInputChanged](TwoWayBinder.md#oninputchanged)
- [updateElements](TwoWayBinder.md#updateelements)
- [updateInput](TwoWayBinder.md#updateinput)
- [updateOutput](TwoWayBinder.md#updateoutput)

## Constructors

### constructor

• **new TwoWayBinder**(`inputElement`, `outputElement`, `eventType?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputElement` | `HTMLInputElement` | `undefined` |
| `outputElement` | `HTMLElement` | `undefined` |
| `eventType` | `string` | `'input'` |

#### Defined in

[src/classes/TwoWayBinder.ts:18](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L18)

## Properties

### eventType

• `Private` **eventType**: `string`

#### Defined in

[src/classes/TwoWayBinder.ts:16](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L16)

___

### inputElement

• `Private` **inputElement**: `HTMLInputElement`

#### Defined in

[src/classes/TwoWayBinder.ts:14](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L14)

___

### outputElement

• `Private` **outputElement**: `HTMLElement`

#### Defined in

[src/classes/TwoWayBinder.ts:15](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L15)

## Accessors

### value

• `get` **value**(): `string`

#### Returns

`string`

#### Defined in

[src/classes/TwoWayBinder.ts:51](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L51)

• `set` **value**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Defined in

[src/classes/TwoWayBinder.ts:55](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L55)

## Methods

### onInputChanged

▸ `Private` **onInputChanged**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/TwoWayBinder.ts:34](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L34)

___

### updateElements

▸ `Private` **updateElements**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/TwoWayBinder.ts:38](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L38)

___

### updateInput

▸ **updateInput**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/TwoWayBinder.ts:43](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L43)

___

### updateOutput

▸ **updateOutput**(): `void`

#### Returns

`void`

#### Defined in

[src/classes/TwoWayBinder.ts:47](https://github.com/AhmadHddad/h-utils/blob/0ea4b8b/src/classes/TwoWayBinder.ts#L47)
