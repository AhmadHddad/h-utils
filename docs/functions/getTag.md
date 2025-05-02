[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getTag

# Function: getTag()

> **getTag**(`value`): `string`

Defined in: [src/utils/general/getTag.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/general/getTag.ts#L10)

Gets the `toStringTag` of `value`.

## Parameters

### value

`unknown`

## Returns

`string`

## See

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag

## Description

The Symbol.toStringTag static data property represents the well-known symbol @@toStringTag.

## Examples

```ts
getTag("foo"); // "[object String]"
```

```ts
getTag([1, 2]); // "[object Array]"
```
