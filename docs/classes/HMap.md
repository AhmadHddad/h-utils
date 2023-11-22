[hd-utils](../README.md) / [Exports](../modules.md) / HMap

# Class: HMap<K, V\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `symbol` |
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
- [clear](HMap.md#clear)
- [delete](HMap.md#delete)
- [entries](HMap.md#entries)
- [every](HMap.md#every)
- [filter](HMap.md#filter)
- [findValue](HMap.md#findvalue)
- [forEach](HMap.md#foreach)
- [get](HMap.md#get)
- [getAllKeys](HMap.md#getallkeys)
- [getAllValues](HMap.md#getallvalues)
- [getValuesArray](HMap.md#getvaluesarray)
- [has](HMap.md#has)
- [keys](HMap.md#keys)
- [map](HMap.md#map)
- [mapArray](HMap.md#maparray)
- [set](HMap.md#set)
- [some](HMap.md#some)
- [toObject](HMap.md#toobject)
- [values](HMap.md#values)
- [from](HMap.md#from)

## Constructors

### constructor

• **new HMap**<`K`, `V`\>(`entries?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `symbol` |
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
| `K` | extends `string` \| `symbol` |
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

### every

▸ **every**(`callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/classes/HMap.ts:50](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L50)

___

### filter

▸ **filter**(`callback`): [`HMap`](HMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

[`HMap`](HMap.md)<`K`, `V`\>

#### Defined in

[src/classes/HMap.ts:6](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L6)

___

### findValue

▸ **findValue**(`callback`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`undefined` \| `V`

#### Defined in

[src/classes/HMap.ts:38](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L38)

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

### getAllKeys

▸ **getAllKeys**(): `K`[]

#### Returns

`K`[]

#### Defined in

[src/classes/HMap.ts:56](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L56)

___

### getAllValues

▸ **getAllValues**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/classes/HMap.ts:66](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L66)

___

### getValuesArray

▸ **getValuesArray**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/classes/HMap.ts:18](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L18)

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

▸ **map**<`U`\>(`callback`): [`HMap`](HMap.md)<`K`, `U`\>

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `U` |

#### Returns

[`HMap`](HMap.md)<`K`, `U`\>

#### Defined in

[src/classes/HMap.ts:22](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L22)

___

### mapArray

▸ **mapArray**<`U`\>(`callback`): `U`[]

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `U` |

#### Returns

`U`[]

#### Defined in

[src/classes/HMap.ts:30](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L30)

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

### some

▸ **some**(`callback`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`value`: `V`, `key`: `K`, `map`: [`HMap`](HMap.md)<`K`, `V`\>) => `boolean` |

#### Returns

`boolean`

#### Defined in

[src/classes/HMap.ts:60](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L60)

___

### toObject

▸ **toObject**(): `Record`<`K`, `V`\>

#### Returns

`Record`<`K`, `V`\>

#### Defined in

[src/classes/HMap.ts:70](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L70)

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

▸ `Static` **from**<`K`, `V`\>(`obj`): [`HMap`](HMap.md)<`K`, `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `symbol` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`K`, `V`\> |

#### Returns

[`HMap`](HMap.md)<`K`, `V`\>

#### Defined in

[src/classes/HMap.ts:2](https://github.com/AhmadHddad/h-utils/blob/5bfbb1a/src/classes/HMap.ts#L2)
