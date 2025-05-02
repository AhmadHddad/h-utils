[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / createWatchers

# Function: createWatchers()

> **createWatchers**\<`T`\>(`target`): `Watcher`\<`T`\>

Defined in: [src/utils/functions/createWatchers.ts:29](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/createWatchers.ts#L29)

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### target

`T`

## Returns

`Watcher`\<`T`\>

## Description

will call the passed object whenever the returned object is changed and will pass the prev and the current object.target.

## Example

```ts
const watcher = createWatcher({ name: 'John', age: 25 });

// Observer function
const callbackFunction: ChangeCallback<{ name: string; age: number }> = (prev, current) => {
 console.log('Object changed:', prev, '->', current);
};

// Start observing
watcher.observe(callbackFunction);

// Trigger changes
watcher.target.name = 'Alice';
watcher.target.age = 30;

// Stop observing
watcher.unobserve(callbackFunction);
```
