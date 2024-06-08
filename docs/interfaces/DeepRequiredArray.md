[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / \_DeepRequiredArray

# Interface: \_DeepRequiredArray\<T\>

## Extends

- `Array`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>

## Type parameters

• **T**

## Properties

### length

> **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

`Array.length`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1304

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>

Iterator

#### Returns

`IterableIterator`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>

#### Inherited from

`Array.[iterator]`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:60

***

### `[unscopables]`()

> **\[unscopables\]**(): `object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`object`

##### copyWithin

> **copyWithin**: `boolean`

##### entries

> **entries**: `boolean`

##### fill

> **fill**: `boolean`

##### find

> **find**: `boolean`

##### findIndex

> **findIndex**: `boolean`

##### keys

> **keys**: `boolean`

##### values

> **values**: `boolean`

#### Inherited from

`Array.[unscopables]`

#### Source

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

***

### at()

> **at**(`index`): `undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

Returns the item located at the specified index.

#### Parameters

• **index**: `number`

The zero-based index of the desired code unit. A negative index will count back from the last item.

#### Returns

`undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

#### Inherited from

`Array.at`

#### Source

node\_modules/typescript/lib/lib.es2022.array.d.ts:26

***

### concat()

#### concat(items)

> **concat**(...`items`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

• ...**items**: `ConcatArray`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>[]

Additional arrays and/or items to add to the end of the array.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

##### Inherited from

`Array.concat`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1328

#### concat(items)

> **concat**(...`items`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

##### Parameters

• ...**items**: ([`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\> \| `ConcatArray`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>)[]

Additional arrays and/or items to add to the end of the array.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

##### Inherited from

`Array.concat`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1334

***

### copyWithin()

> **copyWithin**(`target`, `start`, `end`?): `this`

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

• **target**: `number`

If target is negative, it is treated as length+target where length is the
length of the array.

• **start**: `number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

• **end?**: `number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

`Array.copyWithin`

#### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:64

***

### entries()

> **entries**(): `IterableIterator`\<[`number`, [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>]\>

#### Inherited from

`Array.entries`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:65

***

### every()

#### every(predicate, thisArg)

> **every**\<`S`\>(`predicate`, `thisArg`?): `this is S[]`

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

`this is S[]`

##### Inherited from

`Array.every`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1411

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

`Array.every`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1420

***

### fill()

> **fill**(`value`, `start`?, `end`?): `this`

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

• **value**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

value to fill array section with

• **start?**: `number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

• **end?**: `number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

`Array.fill`

#### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:53

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

`Array.filter`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1447

#### filter(predicate, thisArg)

> **filter**(`predicate`, `thisArg`?): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

• **predicate**

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

• **thisArg?**: `any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

##### Inherited from

`Array.filter`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1453

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

`Array.find`

##### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:31

#### find(predicate, thisArg)

> **find**(`predicate`, `thisArg`?): `undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Parameters

• **predicate**

• **thisArg?**: `any`

##### Returns

`undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Inherited from

`Array.find`

##### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:32

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

`Array.findIndex`

#### Source

node\_modules/typescript/lib/lib.es2015.core.d.ts:43

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

`Array.flat`

#### Source

node\_modules/typescript/lib/lib.es2019.array.d.ts:81

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

`Array.flatMap`

#### Source

node\_modules/typescript/lib/lib.es2019.array.d.ts:70

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

`Array.forEach`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1435

***

### includes()

> **includes**(`searchElement`, `fromIndex`?): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

• **searchElement**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

The element to search for.

• **fromIndex?**: `number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`Array.includes`

#### Source

node\_modules/typescript/lib/lib.es2016.array.include.d.ts:27

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

• **searchElement**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`Array.indexOf`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1396

***

### join()

> **join**(`separator`?): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

• **separator?**: `string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`Array.join`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1339

***

### keys()

> **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

`Array.keys`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:70

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex`?): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

• **searchElement**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

The value to locate in the array.

• **fromIndex?**: `number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

#### Returns

`number`

#### Inherited from

`Array.lastIndexOf`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1402

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

`Array.map`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1441

***

### pop()

> **pop**(): `undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

#### Inherited from

`Array.pop`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1317

***

### push()

> **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

• ...**items**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

New elements to add to the array.

#### Returns

`number`

#### Inherited from

`Array.push`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1322

***

### reduce()

#### reduce(callbackfn)

> **reduce**(`callbackfn`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Inherited from

`Array.reduce`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1459

#### reduce(callbackfn, initialValue)

> **reduce**(`callbackfn`, `initialValue`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Parameters

• **callbackfn**

• **initialValue**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Inherited from

`Array.reduce`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1460

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

`Array.reduce`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1466

***

### reduceRight()

#### reduceRight(callbackfn)

> **reduceRight**(`callbackfn`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

##### Parameters

• **callbackfn**

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Inherited from

`Array.reduceRight`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1472

#### reduceRight(callbackfn, initialValue)

> **reduceRight**(`callbackfn`, `initialValue`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Parameters

• **callbackfn**

• **initialValue**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

##### Inherited from

`Array.reduceRight`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1473

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

`Array.reduceRight`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1479

***

### reverse()

> **reverse**(): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

#### Inherited from

`Array.reverse`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1344

***

### shift()

> **shift**(): `undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>

#### Inherited from

`Array.shift`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1349

***

### slice()

> **slice**(`start`?, `end`?): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

• **start?**: `number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

• **end?**: `number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

#### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

#### Inherited from

`Array.slice`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1359

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

`Array.some`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1429

***

### sort()

> **sort**(`compareFn`?): `this`

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

• **compareFn?**

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

`Array.sort`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1370

***

### splice()

#### splice(start, deleteCount)

> **splice**(`start`, `deleteCount`?): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount?**: `number`

The number of elements to remove.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1377

#### splice(start, deleteCount, items)

> **splice**(`start`, `deleteCount`, ...`items`): [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

##### Parameters

• **start**: `number`

The zero-based location in the array from which to start removing elements.

• **deleteCount**: `number`

The number of elements to remove.

• ...**items**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Elements to insert into the array in place of the deleted elements.

##### Returns

[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

##### Source

node\_modules/typescript/lib/lib.es5.d.ts:1385

***

### toLocaleString()

> **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

`Array.toLocaleString`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1312

***

### toString()

> **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`Array.toString`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1308

***

### unshift()

> **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

• ...**items**: [`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>[]

Elements to insert at the start of the array.

#### Returns

`number`

#### Inherited from

`Array.unshift`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1390

***

### values()

> **values**(): `IterableIterator`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<[`DeepRequired`](../type-aliases/DeepRequired.md)\<[`NonUndefined`](../type-aliases/NonUndefined.md)\<`T`\>\>\>

#### Inherited from

`Array.values`

#### Source

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:75
