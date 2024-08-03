[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / stringIncludes

# Function: stringIncludes()

> **stringIncludes**(`stringOrStrings`, `searchStrings`): `boolean`

## Parameters

• **stringOrStrings**: `string` \| `string`[]

• **searchStrings**: `string` \| `string`[]

## Returns

`boolean`

## Description

The stringIncludes function is designed to determine whether any string within a given array (stringArr) includes a specified substring or any of the substrings contained in an array (searchStrings). The function is flexible, accommodating scenarios where searchStrings can be either a single string or an array of strings.

## Example

```ts
const sites = ['www.google.com', 'www.youtube.com'];
sites.includes('www'); // false;
stringIncludes(sites, 'www'); // true;

const y = ['apple', 'orange', 'banana'];

stringIncludes(y, 'app'); // true;
stringIncludes(y, ['app', 'grape']); // true;
```

## Source

[src/utils/string/stringIncludes.ts:14](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/string/stringIncludes.ts#L14)
