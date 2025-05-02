[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / addColorSchemeChangeListener

# Function: addColorSchemeChangeListener()

> **addColorSchemeChangeListener**(`callback`): () => `void`

Defined in: [src/utils/browser/addColorSchemeChangeListener.ts:14](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/addColorSchemeChangeListener.ts#L14)

## Parameters

### callback

(`colorScheme`, `event`) => `void`

## Returns

> (): `void`

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
