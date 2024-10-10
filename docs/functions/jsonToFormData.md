[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / jsonToFormData

# Function: jsonToFormData()

> **jsonToFormData**(`jsonData`, `type`?, `boundary`?): `string`

## Parameters

• **jsonData**: `Record`\<`string`, `unknown`\>

The JSON object where keys are form field names 
and values can be strings, numbers, arrays, or nested objects.

• **type?**: `"form-data"` \| `"related"` \| `"mixed"` \| `"urlencoded"`= `'form-data'`

The type of format to use.

• **boundary?**: `string`

The boundary string used to separate parts of the form data (required for multipart).

## Returns

`string`

- A string representing the specified formatted data.

## Description

Converts a JSON object into a specified multipart or URL-encoded formatted string.

This function takes a JSON object and constructs a string that follows the specified
multipart format or URL-encoded format. It allows for arrays, objects, and simple data types,
supporting `form-data`, `related`, `mixed`, and `application/x-www-form-urlencoded`.

## Example

```ts
const json = { username: 'john_doe', age: 30, files: ['file1.png', 'file2.jpg'] };
const boundary = '----WebKitFormBoundary123456';
const formDataText = jsonToFormData(json, boundary, 'form-data');
console.log(formDataText); // Outputs multipart/form-data formatted string

const urlEncodedText = jsonToFormData(json, undefined, 'urlencoded');
console.log(urlEncodedText); // Outputs application/x-www-form-urlencoded string
```

## Source

src/utils/formData/jsonToFormData.ts:23
