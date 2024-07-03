[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getUserColorSchemePreference

# Function: getUserColorSchemePreference()

> **getUserColorSchemePreference**(): [`ColorScheme`](../type-aliases/ColorScheme.md)

## Returns

[`ColorScheme`](../type-aliases/ColorScheme.md)

## Description

Retrieves the user's preferred color scheme ('light' or 'dark') based on their system settings.

## Example

```ts
const userColorScheme = getUserColorSchemePreference();

container.style.backgroundColor = userColorScheme === 'dark' ? '#121212' : '#ffffff';
```

## Source

[src/utils/browser/getUserColorSchemePreference.ts:13](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/browser/getUserColorSchemePreference.ts#L13)
