[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getUserColorSchemePreference

# Function: getUserColorSchemePreference()

> **getUserColorSchemePreference**(): [`ColorScheme`](../type-aliases/ColorScheme.md)

Defined in: [src/utils/browser/getUserColorSchemePreference.ts:13](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/browser/getUserColorSchemePreference.ts#L13)

## Returns

[`ColorScheme`](../type-aliases/ColorScheme.md)

## Description

Retrieves the user's preferred color scheme ('light' or 'dark') based on their system settings.

## Example

```ts
const userColorScheme = getUserColorSchemePreference();

container.style.backgroundColor = userColorScheme === 'dark' ? '#121212' : '#ffffff';
```
