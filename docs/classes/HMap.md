[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / HMap

# Class: HMap\<K, V\>

## Description

HMap is an extension of Map object, that adds more functionalities to the Map object, such as .from, .filter, .map, .mapFields and others.
its great utility to deal with Map and normal JS objects.

## Example

```ts
HMap.from({ a: 1, b: 2 }).mapArray((val) => val); // [ 1, 2 ]
```

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

#### Description

acts like [].every(), where you provide a function that takes the key and value and return boolean if the condition is applied on every.

#### Example

```ts
HMap.from({a:1}).every((val, key) => val === 1) // true
```

#### Source

[src/classes/HMap.ts:92](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L92)

***

### filter()

> **filter**(`callback`): [`HMap`](HMap.md)\<`K`, `V`\>

#### Parameters

• **callback**

#### Returns

[`HMap`](HMap.md)\<`K`, `V`\>

#### Description

similar to [].filter() it takes a callback with key value and reruns the keys and values the condition is applied to them.

#### Example

```ts
HMap.from({a:1}).filter((v, k) => v === 1).toObject() // {a:1}
```

#### Source

[src/classes/HMap.ts:20](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L20)

***

### findValue()

> **findValue**(`callback`): `undefined` \| `V`

#### Parameters

• **callback**

#### Returns

`undefined` \| `V`

#### Description

will return the value based on a callback that returns a boolean

#### Example

```ts
HMap.from({a:1}).findValue((val, key) => val > 0) // 1;
```

#### Source

[src/classes/HMap.ts:76](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L76)

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

#### Description

will get all of the HMap object keys in an array.

#### Example

```ts
HMap.from({a:1}).getAllKeys() // ["a"]
```

#### Source

[src/classes/HMap.ts:102](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L102)

***

### getAllValues()

> **getAllValues**(): `V`[]

#### Returns

`V`[]

#### Description

will get all of the HMap object values in an array.

#### Example

```ts
HMap.from({a:1}).getAllVAlues() // [1]
```

#### Source

[src/classes/HMap.ts:120](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L120)

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

#### Description

will behave like .map in arrays, but you can't change the keys but you can change the values, will return a new HMap object.

#### Example

```ts
HMap.from({a:1}).mapFields((v, k) => ([v + 1, "b"])).toObject() // { a: [ 2, 'b' ] }
```

#### Source

[src/classes/HMap.ts:52](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L52)

***

### mapArray()

> **mapArray**\<`U`\>(`callback`): `U`[]

#### Type parameters

• **U**

#### Parameters

• **callback**

#### Returns

`U`[]

#### Description

will behave like .map in arrays, but you can't change the keys but you can change the values, will return a new HMap object.

#### Example

```ts
HMap.from({a:1, b:2}).mapArray((val) => (val)) // [ 1, 2 ]
```

#### Source

[src/classes/HMap.ts:64](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L64)

***

### mapFields()

> **mapFields**\<`U`\>(`callback`): [`HMap`](HMap.md)\<`U`, `V`\>

#### Type parameters

• **U** *extends* `string` \| `symbol`

#### Parameters

• **callback**

#### Returns

[`HMap`](HMap.md)\<`U`, `V`\>

#### Description

will behave like .map in arrays where you can change the keys and the values, will return a new HMap object.

#### Example

```ts
HMap.from({a:1}).mapFields((v, k) => ([v + 1, "b"])).toObject() // {b:2}
```

#### Source

[src/classes/HMap.ts:36](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L36)

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

#### Description

acts like [].some(), where you provide a function that takes the key and value and return boolean if the condition is applied on some.

#### Example

```ts
HMap.from({a:1}).some((val, key) => val === 1) // true
```

#### Source

[src/classes/HMap.ts:110](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L110)

***

### toObject()

> **toObject**(): `Record`\<`K`, `V`\>

#### Returns

`Record`\<`K`, `V`\>

#### Description

will convert the HMap to normal JS object.

#### Example

```ts
HMap.from({a:1}).toObject() // {a:1}
```

#### Source

[src/classes/HMap.ts:128](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L128)

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

#### Description

takes a normal js object and reruns HMap instance.

#### Example

```ts
const hmap = HMap.from({a:1}).
```

#### Source

[src/classes/HMap.ts:12](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/classes/HMap.ts#L12)
