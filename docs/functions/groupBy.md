[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`\>(`array`, `keyOrCondition`, `transform?`): [`GroupedObject`](../type-aliases/GroupedObject.md)\<`T`\>

Defined in: [src/utils/array/groupBy.ts:29](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/array/groupBy.ts#L29)

## Type Parameters

### T

`T`

## Parameters

### array

`T`[]

### keyOrCondition

`string` | (`item`) => `string`

### transform?

(`item`, `key`) => `T`

## Returns

[`GroupedObject`](../type-aliases/GroupedObject.md)\<`T`\>

## Description

function to categorizes an array of objects by a key or condition. It also supports optional object transformation before grouping.

## Example

```ts
groupBy(
 [
 { name: 'Alice', age: 25 },
 { name: 'Bob', age: 30 },
 { name: 'Charlie', age: 25 },
 { name: 'David', age: 30 },
],
 'age',
 (person) => ({ ...person, isNew: person.age < 30 })
) // 
{
 25: [
   { name: 'Alice', age: 25, isNew: true },
   { name: 'Charlie', age: 25, isNew: true },
 ],
 30: [
   { name: 'Bob', age: 30, isNew: false },
   { name: 'David', age: 30, isNew: false },
 ],
};
```
