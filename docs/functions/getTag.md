[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getTag

# Function: getTag()

> **getTag**(`value`): `string`

Gets the `toStringTag` of `value`.

## Parameters

• **value**: `unknown`

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

## Source

[src/utils/general/getTag.ts:10](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/general/getTag.ts#L10)
