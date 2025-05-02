[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / validateImageURLAsync

# Function: validateImageURLAsync()

> **validateImageURLAsync**(`url`): `Promise`\<`boolean`\>

Defined in: [src/utils/validators/validateImageURLAsync.ts:10](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validators/validateImageURLAsync.ts#L10)

## Parameters

### url

`string`

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
