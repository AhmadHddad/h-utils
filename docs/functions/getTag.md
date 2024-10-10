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

[src/utils/general/getTag.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/general/getTag.ts#L10)
