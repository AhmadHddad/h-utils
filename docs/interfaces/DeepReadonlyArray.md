[hd-utils](../README.md) / [Exports](../modules.md) / \_DeepReadonlyArray

# Interface: \_DeepReadonlyArray<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `ReadonlyArray`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>

  ↳ **`_DeepReadonlyArray`**

## Table of contents

### Properties

- [length](DeepReadonlyArray.md#length)

### Methods

- [[iterator]](DeepReadonlyArray.md#[iterator])
- [at](DeepReadonlyArray.md#at)
- [concat](DeepReadonlyArray.md#concat)
- [entries](DeepReadonlyArray.md#entries)
- [every](DeepReadonlyArray.md#every)
- [filter](DeepReadonlyArray.md#filter)
- [find](DeepReadonlyArray.md#find)
- [findIndex](DeepReadonlyArray.md#findindex)
- [flat](DeepReadonlyArray.md#flat)
- [flatMap](DeepReadonlyArray.md#flatmap)
- [forEach](DeepReadonlyArray.md#foreach)
- [includes](DeepReadonlyArray.md#includes)
- [indexOf](DeepReadonlyArray.md#indexof)
- [join](DeepReadonlyArray.md#join)
- [keys](DeepReadonlyArray.md#keys)
- [lastIndexOf](DeepReadonlyArray.md#lastindexof)
- [map](DeepReadonlyArray.md#map)
- [reduce](DeepReadonlyArray.md#reduce)
- [reduceRight](DeepReadonlyArray.md#reduceright)
- [slice](DeepReadonlyArray.md#slice)
- [some](DeepReadonlyArray.md#some)
- [toLocaleString](DeepReadonlyArray.md#tolocalestring)
- [toString](DeepReadonlyArray.md#tostring)
- [values](DeepReadonlyArray.md#values)

## Properties

### length

• `Readonly` **length**: `number`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

ReadonlyArray.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1170

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>

Iterator of values in the array.

#### Returns

`IterableIterator`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>

#### Inherited from

ReadonlyArray.\_\_@iterator@85

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:96

___

### at

▸ **at**(`index`): `undefined` \| [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Inherited from

ReadonlyArray.at

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:34

___

### concat

▸ **concat**(`...items`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

Combines two or more arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>[] | Additional items to add to the end of array1. |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

#### Inherited from

ReadonlyArray.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1183

▸ **concat**(`...items`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

Combines two or more arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | ([`DeepReadonly`](../modules.md#deepreadonly)<`T`\> \| `ConcatArray`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>)[] | Additional items to add to the end of array1. |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

#### Inherited from

ReadonlyArray.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1188

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>]\>

#### Inherited from

ReadonlyArray.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:101

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is readonly S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is readonly S[]

#### Inherited from

ReadonlyArray.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1220

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

ReadonlyArray.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1229

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

ReadonlyArray.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1256

▸ **filter**(`predicate`, `thisArg?`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

#### Inherited from

ReadonlyArray.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1262

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`this`: `void`, `value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `obj`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

ReadonlyArray.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:352

▸ **find**(`predicate`, `thisArg?`): `undefined` \| [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `obj`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Inherited from

ReadonlyArray.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:353

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `obj`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:364

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

ReadonlyArray.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:52

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

ReadonlyArray.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:40

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

ReadonlyArray.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1244

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

ReadonlyArray.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:36

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1205

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

ReadonlyArray.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1193

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

ReadonlyArray.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:106

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1211

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

ReadonlyArray.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1250

___

### reduce

▸ **reduce**(`callbackfn`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentIndex`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Inherited from

ReadonlyArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1268

▸ **reduce**(`callbackfn`, `initialValue`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentIndex`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> |
| `initialValue` | [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Inherited from

ReadonlyArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1269

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentIndex`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

ReadonlyArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1275

___

### reduceRight

▸ **reduceRight**(`callbackfn`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentIndex`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Inherited from

ReadonlyArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1281

▸ **reduceRight**(`callbackfn`, `initialValue`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentIndex`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> |
| `initialValue` | [`DeepReadonly`](../modules.md#deepreadonly)<`T`\> |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>

#### Inherited from

ReadonlyArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1282

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `currentIndex`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

ReadonlyArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1288

___

### slice

▸ **slice**(`start?`, `end?`): [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

Returns a section of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning of the specified portion of the array. |
| `end?` | `number` | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

#### Returns

[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]

#### Inherited from

ReadonlyArray.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1199

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>, `index`: `number`, `array`: readonly [`DeepReadonly`](../modules.md#deepreadonly)<`T`\>[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

ReadonlyArray.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1238

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

ReadonlyArray.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1178

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

ReadonlyArray.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1174

___

### values

▸ **values**(): `IterableIterator`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<[`DeepReadonly`](../modules.md#deepreadonly)<`T`\>\>

#### Inherited from

ReadonlyArray.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:111
