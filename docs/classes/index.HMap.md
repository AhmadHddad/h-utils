[hd-utils](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / HMap

# Class: HMap<K, V\>

[index](../modules/index.md).HMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`HMap`**

## Table of contents

### Constructors

- [constructor](index.HMap.md#constructor)

### Properties

- [[toStringTag]](index.HMap.md#[tostringtag])
- [size](index.HMap.md#size)
- [[species]](index.HMap.md#[species])

### Methods

- [[iterator]](index.HMap.md#[iterator])
- [all](index.HMap.md#all)
- [any](index.HMap.md#any)
- [clear](index.HMap.md#clear)
- [delete](index.HMap.md#delete)
- [entries](index.HMap.md#entries)
- [filter](index.HMap.md#filter)
- [findValue](index.HMap.md#findvalue)
- [forEach](index.HMap.md#foreach)
- [get](index.HMap.md#get)
- [getValuesArray](index.HMap.md#getvaluesarray)
- [has](index.HMap.md#has)
- [keys](index.HMap.md#keys)
- [map](index.HMap.md#map)
- [mapArray](index.HMap.md#maparray)
- [set](index.HMap.md#set)
- [values](index.HMap.md#values)
- [from](index.HMap.md#from)

## Constructors

### constructor

• **new HMap**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | readonly readonly [`K`, `V`][] |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:53

• **new HMap**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `Iterable`<readonly [`K`, `V`]\> |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:161

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@20

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:48

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@10

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@18

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### all

▸ **all**(`callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`boolean`

#### Defined in

[src/extensions/HMap/index.ts:46](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L46)

___

### any

▸ **any**(`callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`boolean`

#### Defined in

[src/extensions/HMap/index.ts:54](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L54)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### filter

▸ **filter**(`callback`): [`HMap`](index.HMap.md)<`unknown`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

[`HMap`](index.HMap.md)<`unknown`, `unknown`\>

#### Defined in

[src/extensions/HMap/index.ts:6](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L6)

___

### findValue

▸ **findValue**(`callback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`any`

#### Defined in

[src/extensions/HMap/index.ts:36](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L36)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:31

___

### get

▸ **get**(`key`): `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:36

___

### getValuesArray

▸ **getValuesArray**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/extensions/HMap/index.ts:16](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L16)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:40

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### map

▸ **map**(`callback`): [`HMap`](index.HMap.md)<`unknown`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

[`HMap`](index.HMap.md)<`unknown`, `unknown`\>

#### Defined in

[src/extensions/HMap/index.ts:20](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L20)

___

### mapArray

▸ **mapArray**(`callback`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |

#### Returns

`any`[]

#### Defined in

[src/extensions/HMap/index.ts:28](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L28)

___

### set

▸ **set**(`key`, `value`): [`HMap`](index.HMap.md)<`K`, `V`\>

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`HMap`](index.HMap.md)<`K`, `V`\>

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:44

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

___

### from

▸ `Static` **from**(`obj`): [`HMap`](index.HMap.md)<`string`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

[`HMap`](index.HMap.md)<`string`, `unknown`\>

#### Defined in

[src/extensions/HMap/index.ts:2](https://github.com/AhmadHddad/h-utils/blob/2264529/src/extensions/HMap/index.ts#L2)
