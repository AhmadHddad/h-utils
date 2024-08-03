[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / addColorSchemeChangeListener

# Function: addColorSchemeChangeListener()

> **addColorSchemeChangeListener**(`callback`): () => `void`

## Parameters

• **callback**

## Returns

`Function`

### Returns

`void`

## Description

tracks changes in the user's color scheme preference and invokes a callback with the updated scheme ('dark' or 'light'). Use the returned function to remove the listener when necessary. Ideal for adapting visual elements to user preferences.

## Example

```ts
const removeListener = addColorSchemeChangeListener((newColorScheme, event) => {
 console.log(`Color scheme changed to: ${newColorScheme}`);
});

// Later, when you want to stop listening for color scheme changes
removeListener();
```

## Source

[src/utils/browser/addColorSchemeChangeListener.ts:14](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/browser/addColorSchemeChangeListener.ts#L14)
