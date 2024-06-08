[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / compareDates

# Function: compareDates()

> **compareDates**(`firstDate`, `secondDate`, `comparisonLevel`): `boolean`

## Parameters

• **firstDate**: `string` \| `Date`

• **secondDate**: `string` \| `Date`

• **comparisonLevel**: [`DateComparisonLevel`](../type-aliases/DateComparisonLevel.md)= `"full"`

## Returns

`boolean`

## Description

will check if the passed dates are equal, you can pass a comparisonLevel to determine the level of granularity for the date comparison

## Example

```ts
const firstDate = new Date("2023-12-12T12:30:00");
const secondDate = new Date("2023-12-12T15:45:00");

compareDates(firstDate, secondDate); // Output: false
compareDates(firstDate, secondDate, "year"); // Output: true
compareDates(firstDate, secondDate, "hour"); // Output: false
```

## Source

[src/utils/date/compareDates.ts:15](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/date/compareDates.ts#L15)
