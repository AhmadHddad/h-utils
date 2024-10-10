[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`\>(`array`, `keyOrCondition`, `transform`?): [`GroupedObject`](../type-aliases/GroupedObject.md)\<`T`\>

## Type parameters

• **T**

## Parameters

• **array**: `T`[]

• **keyOrCondition**: `string` \| (`item`) => `string`

• **transform?**

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

## Source

[src/utils/array/groupBy.ts:29](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/array/groupBy.ts#L29)
