[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / \_DeepReadonlyArray

# Interface: \_DeepReadonlyArray\<T\>

## Extends

- `ReadonlyArray`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

## Type parameters

• **T**

## Properties

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### \[unscopables\]?

> `optional` `readonly` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### length?

> `optional` `readonly` **length**: `boolean`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### \[iterator\]?

> `optional` **\[iterator\]**

#### at?

> `optional` **at**

#### concat?

> `optional` **concat**

#### entries?

> `optional` **entries**

#### every?

> `optional` **every**

#### filter?

> `optional` **filter**

#### find?

> `optional` **find**

#### findIndex?

> `optional` **findIndex**

#### findLast?

> `optional` **findLast**

#### findLastIndex?

> `optional` **findLastIndex**

#### flat?

> `optional` **flat**

#### flatMap?

> `optional` **flatMap**

#### forEach?

> `optional` **forEach**

#### includes?

> `optional` **includes**

#### indexOf?

> `optional` **indexOf**

#### join?

> `optional` **join**

#### keys?

> `optional` **keys**

#### lastIndexOf?

> `optional` **lastIndexOf**

#### map?

> `optional` **map**

#### reduce?

> `optional` **reduce**

#### reduceRight?

> `optional` **reduceRight**

#### slice?

> `optional` **slice**

#### some?

> `optional` **some**

#### toLocaleString?

> `optional` **toLocaleString**

#### toReversed?

> `optional` **toReversed**

#### toSorted?

> `optional` **toSorted**

#### toSpliced?

> `optional` **toSpliced**

#### toString?

> `optional` **toString**

#### values?

> `optional` **values**

#### with?

> `optional` **with**

#### Inherited from

`ReadonlyArray.[unscopables]`

#### Source

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:107

***

### length

> `readonly` **length**: `number`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

`ReadonlyArray.length`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1192

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

Iterator of values in the array.

#### Returns

`IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

#### Inherited from

`ReadonlyArray.[iterator]`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:94

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

node\_modules/typescript/lib/lib.es2022.array.d.ts:32

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

node\_modules/typescript/lib/lib.es5.d.ts:1205

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

node\_modules/typescript/lib/lib.es5.d.ts:1210

***

### entries()

> **entries**(): `IterableIterator`\<[`number`, [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>]\>

#### Inherited from

`ReadonlyArray.entries`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:99

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

node\_modules/typescript/lib/lib.es5.d.ts:1242

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

node\_modules/typescript/lib/lib.es5.d.ts:1251

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

node\_modules/typescript/lib/lib.es5.d.ts:1278

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

node\_modules/typescript/lib/lib.es5.d.ts:1284

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

### findLast()

#### findLast(predicate, thisArg)

> **findLast**\<`S`\>(`predicate`, `thisArg`?): `undefined` \| `S`

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

##### Type parameters

• **S**

##### Parameters

• **predicate**

findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`ReadonlyArray.findLast`

##### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:98

#### findLast(predicate, thisArg)

> **findLast**(`predicate`, `thisArg`?): `undefined` \| [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Parameters

• **predicate**

• **thisArg?**: `any`

##### Returns

`undefined` \| [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

##### Inherited from

`ReadonlyArray.findLast`

##### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:102

***

### findLastIndex()

> **findLastIndex**(`predicate`, `thisArg`?): `number`

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

#### Parameters

• **predicate**

findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.

• **thisArg?**: `any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`ReadonlyArray.findLastIndex`

#### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:116

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

node\_modules/typescript/lib/lib.es2019.array.d.ts:47

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

node\_modules/typescript/lib/lib.es2019.array.d.ts:36

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

node\_modules/typescript/lib/lib.es5.d.ts:1266

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

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:34

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

node\_modules/typescript/lib/lib.es5.d.ts:1227

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

node\_modules/typescript/lib/lib.es5.d.ts:1215

***

### keys()

> **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

`ReadonlyArray.keys`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:104

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

node\_modules/typescript/lib/lib.es5.d.ts:1233

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

node\_modules/typescript/lib/lib.es5.d.ts:1272

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

node\_modules/typescript/lib/lib.es5.d.ts:1290

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

node\_modules/typescript/lib/lib.es5.d.ts:1291

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

node\_modules/typescript/lib/lib.es5.d.ts:1297

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

node\_modules/typescript/lib/lib.es5.d.ts:1303

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

node\_modules/typescript/lib/lib.es5.d.ts:1304

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

node\_modules/typescript/lib/lib.es5.d.ts:1310

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

node\_modules/typescript/lib/lib.es5.d.ts:1221

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

node\_modules/typescript/lib/lib.es5.d.ts:1260

***

### toLocaleString()

#### toLocaleString()

> **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1200

#### toLocaleString(locales, options)

> **toLocaleString**(`locales`, `options`?): `string`

##### Parameters

• **locales**: `string` \| `string`[]

• **options?**: `NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`ReadonlyArray.toLocaleString`

##### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:366

***

### toReversed()

> **toReversed**(): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Copies the array and returns the copied array with all of its elements reversed.

#### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

#### Inherited from

`ReadonlyArray.toReversed`

#### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:124

***

### toSorted()

> **toSorted**(`compareFn`?): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Copies and sorts the array.

#### Parameters

• **compareFn?**

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
```ts
[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]
```

#### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

#### Inherited from

`ReadonlyArray.toSorted`

#### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:135

***

### toSpliced()

#### toSpliced(start, deleteCount, items)

> **toSpliced**(`start`, `deleteCount`, ...`items`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount**: `number`

The number of elements to remove.

• ...**items**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Elements to insert into the copied array in place of the deleted elements.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

A copy of the original array with the remaining elements.

##### Inherited from

`ReadonlyArray.toSpliced`

##### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:144

#### toSpliced(start, deleteCount)

> **toSpliced**(`start`, `deleteCount`?): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Copies an array and removes elements while returning the remaining elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount?**: `number`

The number of elements to remove.

##### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

A copy of the original array with the remaining elements.

##### Inherited from

`ReadonlyArray.toSpliced`

##### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:152

***

### toString()

> **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`ReadonlyArray.toString`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1196

***

### values()

> **values**(): `IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>\>

#### Inherited from

`ReadonlyArray.values`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:109

***

### with()

> **with**(`index`, `value`): [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array

#### Parameters

• **index**: `number`

The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.

• **value**: [`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>

The value to insert into the copied array.

#### Returns

[`DeepReadonly`](../type-aliases/DeepReadonly.md)\<`T`\>[]

A copy of the original array with the inserted value.

#### Inherited from

`ReadonlyArray.with`

#### Source

node\_modules/typescript/lib/lib.es2023.array.d.ts:163
