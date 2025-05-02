[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / HMap

# Class: HMap\<K, V\>

Defined in: [src/classes/HMap.ts:7](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L7)

## Description

HMap is an extension of Map object, that adds more functionalities to the Map object, such as .from, .filter, .map, .mapFields and others.
its great utility to deal with Map and normal JS objects.

## Example

```ts
HMap.from({ a: 1, b: 2 }).mapArray((val) => val); // [ 1, 2 ]
```

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

### K

`K` *extends* `string` \| `symbol`

### V

`V`

## Constructors

### Constructor

> **new HMap**\<`K`, `V`\>(`entries?`): `HMap`\<`K`, `V`\>

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

#### Parameters

##### entries?

readonly readonly \[`K`, `V`\][]

#### Returns

`HMap`\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

### Constructor

> **new HMap**\<`K`, `V`\>(`iterable?`): `HMap`\<`K`, `V`\>

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:49

#### Parameters

##### iterable?

`Iterable`\<readonly \[`K`, `V`\], `any`, `any`\>

#### Returns

`HMap`\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

`Map.[toStringTag]`

***

### size

> `readonly` **size**: `number`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

`Map.size`

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

Defined in: node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

`Map.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`K`, `V`\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Inherited from

`Map.[iterator]`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

`Map.clear`

***

### delete()

> **delete**(`key`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

#### Parameters

##### key

`K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

***

### entries()

> **entries**(): `MapIterator`\<\[`K`, `V`\]\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:148

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Inherited from

`Map.entries`

***

### every()

> **every**(`callback`): `boolean`

Defined in: [src/classes/HMap.ts:92](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L92)

#### Parameters

##### callback

(`value`, `key`, `map`) => `boolean`

#### Returns

`boolean`

#### Description

acts like [].every(), where you provide a function that takes the key and value and return boolean if the condition is applied on every.

#### Example

```ts
HMap.from({a:1}).every((val, key) => val === 1) // true
```

***

### filter()

> **filter**(`callback`): `HMap`\<`K`, `V`\>

Defined in: [src/classes/HMap.ts:20](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L20)

#### Parameters

##### callback

(`value`, `key`, `map`) => `boolean`

#### Returns

`HMap`\<`K`, `V`\>

#### Description

similar to [].filter() it takes a callback with key value and reruns the keys and values the condition is applied to them.

#### Example

```ts
HMap.from({a:1}).filter((v, k) => v === 1).toObject() // {a:1}
```

***

### findValue()

> **findValue**(`callback`): `V`

Defined in: [src/classes/HMap.ts:76](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L76)

#### Parameters

##### callback

(`value`, `key`, `map`) => `boolean`

#### Returns

`V`

#### Description

will return the value based on a callback that returns a boolean

#### Example

```ts
HMap.from({a:1}).findValue((val, key) => val > 0) // 1;
```

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

##### callbackfn

(`value`, `key`, `map`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

***

### get()

> **get**(`key`): `V`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`K`

#### Returns

`V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

***

### getAllKeys()

> **getAllKeys**(): `K`[]

Defined in: [src/classes/HMap.ts:102](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L102)

#### Returns

`K`[]

#### Description

will get all of the HMap object keys in an array.

#### Example

```ts
HMap.from({a:1}).getAllKeys() // ["a"]
```

***

### getAllValues()

> **getAllValues**(): `V`[]

Defined in: [src/classes/HMap.ts:120](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L120)

#### Returns

`V`[]

#### Description

will get all of the HMap object values in an array.

#### Example

```ts
HMap.from({a:1}).getAllVAlues() // [1]
```

***

### has()

> **has**(`key`): `boolean`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

#### Parameters

##### key

`K`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

***

### keys()

> **keys**(): `MapIterator`\<`K`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:153

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Inherited from

`Map.keys`

***

### map()

> **map**\<`U`\>(`callback`): `HMap`\<`K`, `U`\>

Defined in: [src/classes/HMap.ts:52](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L52)

#### Type Parameters

##### U

`U`

#### Parameters

##### callback

(`value`, `key`, `map`) => `U`

#### Returns

`HMap`\<`K`, `U`\>

#### Description

will behave like .map in arrays, but you can't change the keys but you can change the values, will return a new HMap object.

#### Example

```ts
HMap.from({a:1}).mapFields((v, k) => ([v + 1, "b"])).toObject() // { a: [ 2, 'b' ] }
```

***

### mapArray()

> **mapArray**\<`U`\>(`callback`): `U`[]

Defined in: [src/classes/HMap.ts:64](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L64)

#### Type Parameters

##### U

`U`

#### Parameters

##### callback

(`value`, `key`, `map`) => `U`

#### Returns

`U`[]

#### Description

will behave like .map in arrays, but you can't change the keys but you can change the values, will return a new HMap object.

#### Example

```ts
HMap.from({a:1, b:2}).mapArray((val) => (val)) // [ 1, 2 ]
```

***

### mapFields()

> **mapFields**\<`U`\>(`callback`): `HMap`\<`U`, `V`\>

Defined in: [src/classes/HMap.ts:36](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L36)

#### Type Parameters

##### U

`U` *extends* `string` \| `symbol`

#### Parameters

##### callback

(`value`, `key`, `map`) => \[`V`, `U`\]

#### Returns

`HMap`\<`U`, `V`\>

#### Description

will behave like .map in arrays where you can change the keys and the values, will return a new HMap object.

#### Example

```ts
HMap.from({a:1}).mapFields((v, k) => ([v + 1, "b"])).toObject() // {b:2}
```

***

### set()

> **set**(`key`, `value`): `this`

Defined in: node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`K`

##### value

`V`

#### Returns

`this`

#### Inherited from

`Map.set`

***

### some()

> **some**(`callback`): `boolean`

Defined in: [src/classes/HMap.ts:110](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L110)

#### Parameters

##### callback

(`value`, `key`, `map`) => `boolean`

#### Returns

`boolean`

#### Description

acts like [].some(), where you provide a function that takes the key and value and return boolean if the condition is applied on some.

#### Example

```ts
HMap.from({a:1}).some((val, key) => val === 1) // true
```

***

### toObject()

> **toObject**(): `Record`\<`K`, `V`\>

Defined in: [src/classes/HMap.ts:128](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L128)

#### Returns

`Record`\<`K`, `V`\>

#### Description

will convert the HMap to normal JS object.

#### Example

```ts
HMap.from({a:1}).toObject() // {a:1}
```

***

### values()

> **values**(): `MapIterator`\<`V`\>

Defined in: node\_modules/typescript/lib/lib.es2015.iterable.d.ts:158

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Inherited from

`Map.values`

***

### from()

> `static` **from**\<`K`, `V`\>(`obj`): `HMap`\<`K`, `V`\>

Defined in: [src/classes/HMap.ts:12](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/HMap.ts#L12)

#### Type Parameters

##### K

`K` *extends* `string` \| `symbol`

##### V

`V`

#### Parameters

##### obj

`Record`\<`K`, `V`\>

#### Returns

`HMap`\<`K`, `V`\>

#### Description

takes a normal js object and reruns HMap instance.

#### Example

```ts
const hmap = HMap.from({a:1}).
```
