[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / createWatcher

# Function: createWatcher()

> **createWatcher**\<`T`\>(`target`, `callback`): `T`

## Type parameters

• **T** *extends* `object`

## Parameters

• **target**: `T`

• **callback**: [`ChangeCallback`](../type-aliases/ChangeCallback.md)\<`T`\>

## Returns

`T`

## Description

will call the passed object whenever the returned object is changed and will pass the prev and the current object.

## Example

```ts
const watchedObject = createWatcher({ name: 'John', age: 25 }, (prev, current) => {
 console.log('Object changed:', prev, '->', current);
});
watchedObject.age = 30;

// to unwatch 
const prototype = Object.getPrototypeOf(watchedObject);
console.log(prototype.unwatch()) // or just watchedObject.__prototype__.unwatch();
```

## Source

[src/utils/functions/createWatcher.ts:15](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/createWatcher.ts#L15)
