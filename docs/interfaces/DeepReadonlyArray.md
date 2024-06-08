[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / \_DeepReadonlyArray

# Interface: \_DeepReadonlyArray\<T\>

## Extends

- `ReadonlyArray`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

## Type parameters

• **T**

## Properties

### length

> `readonly` **length**: `number`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

`ReadonlyArray.length`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1170

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

Iterator of values in the array.

#### Returns

`IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

#### Inherited from

`ReadonlyArray.[iterator]`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:96

***

### at()

> **at**(`index`): `undefined` \| [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

Returns the item located at the specified index.

#### Parameters

• **index**: `number`

The zero-based index of the desired code unit. A negative index will count back from the last item.

#### Returns

`undefined` \| [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

#### Inherited from

`ReadonlyArray.at`

#### Source

node\_modules/typescript/lib/lib.es2022.array.d.ts:34

***

### concat()

#### concat(items)

> **concat**(...`items`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Combines two or more arrays.

##### Parameters

• ...**items**: `ConcatArray`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>[]

Additional items to add to the end of array1.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

##### Inherited from

`ReadonlyArray.concat`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1183

#### concat(items)

> **concat**(...`items`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Combines two or more arrays.

##### Parameters

• ...**items**: ([`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\> \| `ConcatArray`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>)[]

Additional items to add to the end of array1.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

##### Inherited from

`ReadonlyArray.concat`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1188

***

### entries()

> **entries**(): `IterableIterator`\<[`number`, [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>]\>

#### Inherited from

`ReadonlyArray.entries`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:101

***

### every()

#### every(predicate, thisArg)

> **every**\<`S`\>(`predicate`, `thisArg`?): `this is readonly S[]`

Determines whether all the members of an array satisfy the specified test.

##### Type parameters

• **S**

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`this is readonly S[]`

##### Inherited from

`ReadonlyArray.every`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1220

#### every(predicate, thisArg)

> **every**(`predicate`, `thisArg`?): `boolean`

Determines whether all the members of an array satisfy the specified test.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`ReadonlyArray.every`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1229

***

### filter()

#### filter(predicate, thisArg)

> **filter**\<`S`\>(`predicate`, `thisArg`?): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Type parameters

• **S**

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`ReadonlyArray.filter`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1256

#### filter(predicate, thisArg)

> **filter**(`predicate`, `thisArg`?): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

##### Inherited from

`ReadonlyArray.filter`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1262

***

### find()

#### find(predicate, thisArg)

> **find**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

• **S**

##### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`ReadonlyArray.find`

##### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:352

#### find(predicate, thisArg)

> **find**(`predicate`, `thisArg`?): `undefined` \| [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Parameters

• **predicate**

• **thisArg?**: `any`

##### Returns

`undefined` \| [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Inherited from

`ReadonlyArray.find`

##### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:353

***

### findIndex()

> **findIndex**(`predicate`, `thisArg`?): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

• **predicate**

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.findIndex`

#### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:364

***

### flat()

> **flat**\<`A`, `D`\>(`this`, `depth`?): `FlatArray`\<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

• **A**

• **D** *extends* `number` = `1`

#### Parameters

• **this**: `A`

• **depth?**: `D`

The maximum recursion depth

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

`ReadonlyArray.flat`

#### Source

node\_modules/typescript/lib/lib.es2019.array.d.ts:52

***

### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

• **U**

• **This** = `undefined`

#### Parameters

• **callback**

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

• **thisArg?**: `This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.flatMap`

#### Source

node\_modules/typescript/lib/lib.es2019.array.d.ts:40

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Performs the specified action for each element in an array.

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`ReadonlyArray.forEach`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1244

***

### includes()

> **includes**(`searchElement`, `fromIndex`?): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

• **searchElement**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

The element to search for.

• **fromIndex?**: `number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.includes`

#### Source

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:36

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

• **searchElement**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.indexOf`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1205

***

### join()

> **join**(`separator`?): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

• **separator?**: `string`

A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.join`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1193

***

### keys()

> **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

`ReadonlyArray.keys`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:106

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

• **searchElement**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.lastIndexOf`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1211

***

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg`?): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

• **U**

#### Parameters

• **callbackfn**

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`ReadonlyArray.map`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1250

***

### reduce()

#### reduce(callbackfn)

> **reduce**(`callbackfn`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Inherited from

`ReadonlyArray.reduce`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1268

#### reduce(callbackfn, initialValue)

> **reduce**(`callbackfn`, `initialValue`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Parameters

• **callbackfn**

• **initialValue**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Inherited from

`ReadonlyArray.reduce`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1269

#### reduce(callbackfn, initialValue)

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduce`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1275

***

### reduceRight()

#### reduceRight(callbackfn)

> **reduceRight**(`callbackfn`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Inherited from

`ReadonlyArray.reduceRight`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1281

#### reduceRight(callbackfn, initialValue)

> **reduceRight**(`callbackfn`, `initialValue`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Parameters

• **callbackfn**

• **initialValue**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Inherited from

`ReadonlyArray.reduceRight`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1282

#### reduceRight(callbackfn, initialValue)

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Type parameters

• **U**

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

• **initialValue**: `U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`ReadonlyArray.reduceRight`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1288

***

### slice()

> **slice**(`start`?, `end`?): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Returns a section of an array.

#### Parameters

• **start?**: `number`

The beginning of the specified portion of the array.

• **end?**: `number`

The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

#### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

#### Inherited from

`ReadonlyArray.slice`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1199

***

### some()

> **some**(`predicate`, `thisArg`?): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

• **predicate**

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`ReadonlyArray.some`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1238

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.toLocaleString`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1178

***

### toString()

> **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.toString`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1174

***

### values()

> **values**(): `IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

#### Inherited from

`ReadonlyArray.values`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:111
