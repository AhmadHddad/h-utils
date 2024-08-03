[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / validateImageURLAsync

# Function: validateImageURLAsync()

> **validateImageURLAsync**(`url`): `Promise`\<`boolean`\>

## Parameters

• **url**: `string`

## Returns

`Promise`\<`boolean`\>

## Description

will validate the passed image url, it will make a fetch call to the passed url,
and check if it returns a valid image or not.

## Examples

```ts
validateImageURLAsync("valid-image-url").then(v => console.log(v)) // true
```

```ts
validateImageURLAsync("invalid-image-url").then(v => console.log(v)) // false
```

## Source

[src/utils/validators/validateImageURLAsync.ts:10](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/validators/validateImageURLAsync.ts#L10)
