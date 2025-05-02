[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / validateImageURLAsync

# Function: validateImageURLAsync()

> **validateImageURLAsync**(`url`): `Promise`\<`boolean`\>

Defined in: [src/utils/validators/validateImageURLAsync.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validators/validateImageURLAsync.ts#L10)

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
