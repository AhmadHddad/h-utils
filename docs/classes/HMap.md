[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / HMap

# Class: HMap\<K, V\>

## Extends

- `Map`\<`K`, `V`\>

## Type parameters

• **K** *extends* `string` \| `symbol`

• **V**

## Constructors

### new HMap()

> **new HMap**\<`K`, `V`\>(`entries`?): [`HMap`](HMap.md)\<`K`, `V`\>

#### Parameters

• **entries?**: `null` \| readonly readonly [`K`, `V`][]

#### Returns

[`HMap`](HMap.md)\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:53

### new HMap()

> **new HMap**\<`K`, `V`\>(`iterable`?): [`HMap`](HMap.md)\<`K`, `V`\>

#### Parameters

• **iterable?**: `null` \| `Iterable`\<readonly [`K`, `V`]\>

#### Returns

[`HMap`](HMap.md)\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:52

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Map.[toStringTag]`

#### Source

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

***

### size

> `readonly` **size**: `number`

#### Inherited from

`Map.size`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:48

***

### \[species\]

> `static` `readonly` **\[species\]**: `MapConstructor`

#### Inherited from

`Map.[species]`

#### Source

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.[iterator]`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:121

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

`Map.clear`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:23

***

### delete()

> **delete**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:27

***

### entries()

> **entries**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.entries`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:126

***

### every()

> **every**(`callback`): `boolean`

#### Parameters

• **callback**

#### Returns

`boolean`

#### Source

[src/classes/HMap.ts:50](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L50)

***

### filter()

> **filter**(`callback`): [`HMap`](HMap.md)\<`K`, `V`\>

#### Parameters

• **callback**

#### Returns

[`HMap`](HMap.md)\<`K`, `V`\>

#### Source

[src/classes/HMap.ts:6](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L6)

***

### findValue()

> **findValue**(`callback`): `undefined` \| `V`

#### Parameters

• **callback**

#### Returns

`undefined` \| `V`

#### Source

[src/classes/HMap.ts:38](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L38)

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

• **callbackfn**

• **thisArg?**: `any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:31

***

### get()

> **get**(`key`): `undefined` \| `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

• **key**: `K`

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:36

***

### getAllKeys()

> **getAllKeys**(): `K`[]

#### Returns

`K`[]

#### Source

[src/classes/HMap.ts:56](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L56)

***

### getAllValues()

> **getAllValues**(): `V`[]

#### Returns

`V`[]

#### Source

[src/classes/HMap.ts:66](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L66)

***

### getValuesArray()

> **getValuesArray**(): `V`[]

#### Returns

`V`[]

#### Source

[src/classes/HMap.ts:18](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L18)

***

### has()

> **has**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:40

***

### keys()

> **keys**(): `IterableIterator`\<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`K`\>

#### Inherited from

`Map.keys`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:131

***

### map()

> **map**\<`U`\>(`callback`): [`HMap`](HMap.md)\<`K`, `U`\>

#### Type parameters

• **U**

#### Parameters

• **callback**

#### Returns

[`HMap`](HMap.md)\<`K`, `U`\>

#### Source

[src/classes/HMap.ts:22](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L22)

***

### mapArray()

> **mapArray**\<`U`\>(`callback`): `U`[]

#### Type parameters

• **U**

#### Parameters

• **callback**

#### Returns

`U`[]

#### Source

[src/classes/HMap.ts:30](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L30)

***

### set()

> **set**(`key`, `value`): `this`

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

• **key**: `K`

• **value**: `V`

#### Returns

`this`

#### Inherited from

`Map.set`

#### Source

node\_modules/typescript/lib/lib.es2015.collection.d.ts:44

***

### some()

> **some**(`callback`): `boolean`

#### Parameters

• **callback**

#### Returns

`boolean`

#### Source

[src/classes/HMap.ts:60](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L60)

***

### toObject()

> **toObject**(): `Record`\<`K`, `V`\>

#### Returns

`Record`\<`K`, `V`\>

#### Source

[src/classes/HMap.ts:70](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L70)

***

### values()

> **values**(): `IterableIterator`\<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`V`\>

#### Inherited from

`Map.values`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:136

***

### from()

> `static` **from**\<`K`, `V`\>(`obj`): [`HMap`](HMap.md)\<`K`, `V`\>

#### Type parameters

• **K** *extends* `string` \| `symbol`

• **V**

#### Parameters

• **obj**: `Record`\<`K`, `V`\>

#### Returns

[`HMap`](HMap.md)\<`K`, `V`\>

#### Source

[src/classes/HMap.ts:2](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/classes/HMap.ts#L2)
