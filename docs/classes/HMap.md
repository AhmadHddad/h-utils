[hd-utils](../README.md) / [Exports](../modules.md) / HMap

# Class: HMap<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |
| `V` | `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`HMap`**

## Table of contents

### Constructors

- [constructor](HMap.md#constructor)

### Properties

- [[toStringTag]](HMap.md#[tostringtag])
- [size](HMap.md#size)
- [[species]](HMap.md#[species])

### Methods

- [[iterator]](HMap.md#[iterator])
- [all](HMap.md#all)
- [any](HMap.md#any)
- [clear](HMap.md#clear)
- [delete](HMap.md#delete)
- [entries](HMap.md#entries)
- [filter](HMap.md#filter)
- [findValue](HMap.md#findvalue)
- [forEach](HMap.md#foreach)
- [get](HMap.md#get)
- [getValuesArray](HMap.md#getvaluesarray)
- [has](HMap.md#has)
- [keys](HMap.md#keys)
- [map](HMap.md#map)
- [mapArray](HMap.md#maparray)
- [set](HMap.md#set)
- [values](HMap.md#values)
- [from](HMap.md#from)

## Constructors

### constructor

• **new HMap**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [`K`, `V`][] |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:53

• **new HMap**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | `string` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | ``null`` \| `Iterable`<readonly [`K`, `V`]\> |

#### Inherited from

Map<K, V\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:161

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@25

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

Map.\_\_@species@605

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@85

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### all

▸ **all**(`callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/extensions/HMap/HMap.ts:54](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L54)

___

### any

▸ **any**(`callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/extensions/HMap/HMap.ts:62](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L62)

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

▸ **filter**(`callbackfn`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`this`

#### Defined in

[src/extensions/HMap/HMap.ts:8](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L8)

___

### findValue

▸ **findValue**(`callbackfn`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`V`

#### Defined in

[src/extensions/HMap/HMap.ts:42](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L42)

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

▸ **get**(`key`): `undefined` \| `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:36

___

### getValuesArray

▸ **getValuesArray**(): [`V`]

#### Returns

[`V`]

#### Defined in

[src/extensions/HMap/HMap.ts:20](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L20)

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

▸ **map**(`callback`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `any` |

#### Returns

`this`

#### Defined in

[src/extensions/HMap/HMap.ts:24](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L24)

___

### mapArray

▸ **mapArray**(`callback`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`any`[]

#### Defined in

[src/extensions/HMap/HMap.ts:32](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L32)

___

### set

▸ **set**(`key`, `value`): [`HMap`](HMap.md)<`K`, `V`\>

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`HMap`](HMap.md)<`K`, `V`\>

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

▸ `Static` **from**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

`any`

#### Defined in

[src/extensions/HMap/HMap.ts:4](https://github.com/AhmadHddad/h-utils/blob/f355f18/src/extensions/HMap/HMap.ts#L4)
