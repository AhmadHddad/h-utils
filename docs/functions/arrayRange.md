[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / arrayRange

# Function: arrayRange()

> **arrayRange**(`a`, `b`, `step`): [`StringOrNumber`](../type-aliases/StringOrNumber.md)[]

Defined in: [src/utils/array/arrayRange.ts:12](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/array/arrayRange.ts#L12)

## Parameters

### a

[`Key`](../type-aliases/Key.md)

The starting point of the array.

### b

[`Key`](../type-aliases/Key.md)

The ending value of the range.

### step

`number`

The step value.

## Returns

[`StringOrNumber`](../type-aliases/StringOrNumber.md)[]

An array of strings.

## Description

It takes two arguments, a and b, and returns an array of numbers or letters from a to b

## Examples

```ts
arrayRange(1,5) => [ 1, 2, 3, 4, 5 ]
```

```ts
arrayRange("a", "c") => ["a", "b", "c"]
```
