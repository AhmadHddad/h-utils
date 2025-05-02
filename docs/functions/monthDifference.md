[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / monthDifference

# Function: monthDifference()

> **monthDifference**(`first`, `last`): `number`

Defined in: [src/utils/date/monthDifference.ts:10](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/date/monthDifference.ts#L10)

## Parameters

### first

`string` | `Date`

### last

`string` | `Date`

## Returns

`number`

## Description

will get the deference between 2 dates in months.

## Description

Warning: value can be minus if the you passed dates in reverse.

## Examples

```ts
monthDifference("2022", "2023") // 12
```

```ts
monthDifference("2023", "2022") // -12
```
