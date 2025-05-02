[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / extractBoundary

# Function: extractBoundary()

> **extractBoundary**(`dataText`): `string`

Defined in: [src/utils/formData/extractBoundary.ts:7](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/formData/extractBoundary.ts#L7)

## Parameters

### dataText

`string`

The multipart/form-data text from which to extract the boundary.

## Returns

`string`

- The extracted boundary string, or null if no boundary is found.

## Description

Extracts the boundary string (including the leading '------') from a multipart/form-data text.
