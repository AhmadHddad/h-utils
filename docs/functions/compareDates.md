[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / compareDates

# Function: compareDates()

> **compareDates**(`firstDate`, `secondDate`, `comparisonLevel`): `boolean`

Defined in: [src/utils/date/compareDates.ts:15](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/date/compareDates.ts#L15)

## Parameters

### firstDate

`string` | `Date`

### secondDate

`string` | `Date`

### comparisonLevel

[`DateComparisonLevel`](../type-aliases/DateComparisonLevel.md) = `"full"`

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
