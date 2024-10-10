[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / memoize

# Function: memoize()

> **memoize**\<`T`\>(`func`, `resolver`?): `T`

Creates a function that memoizes the result of `func`. If `resolver` is
provided, it determines the cache key for storing the result based on the
arguments provided to the memoized function. By default, the first argument
provided to the memoized function is used as the map cache key. The `func`
is invoked with the `this` binding of the memoized function.

**Note:** The cache is exposed as the `cache` property on the memoized
function. Its creation may be customized by replacing the `memoize.Cache`
constructor with one whose instances implement the
[`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
method interface of `clear`, `delete`, `get`, `has`, and `set`.

## Type parameters

• **T** *extends* `Function`

## Parameters

• **func**: `T`

The function to have its output memoized.

• **resolver?**: `any`

The function to resolve the cache key.

## Returns

`T`

Returns the new memoized function.

## Since

0.1.0

## Example

```ts
const object = { 'a': 1, 'b': 2 }
const other = { 'c': 3, 'd': 4 }

const values = memoize(values)
values(object)
// => [1, 2]

values(other)
// => [3, 4]

object.a = 2
values(object)
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b'])
values(object)
// => ['a', 'b']

// Replace `memoize.Cache`.
memoize.Cache = WeakMap
```

## Source

[src/utils/functions/memoize.ts:44](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/memoize.ts#L44)
