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

[src/utils/browser/getUserColorSchemePreference.ts:13](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/browser/getUserColorSchemePreference.ts#L13)
