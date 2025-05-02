[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / createWatcher

# Function: createWatcher()

> **createWatcher**\<`T`\>(`target`, `callback`): `T`

Defined in: [src/utils/functions/createWatcher.ts:15](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/createWatcher.ts#L15)

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### target

`T`

### callback

[`ChangeCallback`](../type-aliases/ChangeCallback.md)\<`T`\>

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
