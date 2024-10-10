[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / replaceObjectInArray

# Function: replaceObjectInArray()

> **replaceObjectInArray**\<`T`\>(`arr`, `keyOrPredictor`, `newObject`): `T`[]

## Type parameters

• **T**

## Parameters

• **arr**: `T`[]

• **keyOrPredictor**: `string` \| (`v`) => `boolean`

• **newObject**: `T`

## Returns

`T`[]

## Description

it will replace object inside the array with a new object bases on a key or predictor function.

## Example

```ts
const originalArray = [
 { id: 1, name: 'John' },
 { id: 2, name: 'Jane' },
 { id: 3, name: 'Doe' },
];
const newObject = { id: 2, name: 'Updated Jane' };
replaceObjectByKey(originalArray, 'id', newObject) // [
 { id: 1, name: 'John' },
 { id: 2, name: 'Updated Jane' },
 { id: 3, name: 'Doe' },
];

replaceObjectByKey(originalArray, (obj)=> obj.id === 2, newObject)// [
 { id: 1, name: 'John' },
 { id: 2, name: 'Updated Jane' },
 { id: 3, name: 'Doe' },
]
```

## Source

[src/utils/array/replaceObjectInArray.ts:25](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/array/replaceObjectInArray.ts#L25)
