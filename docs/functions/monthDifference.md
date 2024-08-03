[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / monthDifference

# Function: monthDifference()

> **monthDifference**(`first`, `last`): `number`

## Parameters

• **first**: `string` \| `Date`

• **last**: `string` \| `Date`

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

## Source

[src/utils/date/monthDifference.ts:10](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/date/monthDifference.ts#L10)
