[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / extractBoundary

# Function: extractBoundary()

> **extractBoundary**(`dataText`): `string` \| `null`

## Parameters

• **dataText**: `string`

The multipart/form-data text from which to extract the boundary.

## Returns

`string` \| `null`

- The extracted boundary string, or null if no boundary is found.

## Description

Extracts the boundary string (including the leading '------') from a multipart/form-data text.

## Source

src/utils/formData/extractBoundary.ts:7
