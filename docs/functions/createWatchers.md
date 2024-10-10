[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / createWatchers

# Function: createWatchers()

> **createWatchers**\<`T`\>(`target`): `Watcher`\<`T`\>

## Type parameters

• **T** *extends* `object`

## Parameters

• **target**: `T`

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

## Source

[src/utils/functions/createWatchers.ts:29](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/createWatchers.ts#L29)
