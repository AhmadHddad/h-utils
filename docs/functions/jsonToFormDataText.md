[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / jsonToFormDataText

# Function: jsonToFormDataText()

> **jsonToFormDataText**(`jsonData`, `type?`, `boundary?`): `string`

Defined in: [src/utils/formData/jsonToFormDataText.ts:23](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/formData/jsonToFormDataText.ts#L23)

## Parameters

### jsonData

`Record`\<`string`, `unknown`\>

The JSON object where keys are form field names 
and values can be strings, numbers, arrays, or nested objects.

### type?

The type of format to use.

`"form-data"` | `"related"` | `"mixed"` | `"urlencoded"`

### boundary?

`string`

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
const formDataText = jsonToFormDataText(json, boundary, 'form-data');
console.log(formDataText); // Outputs multipart/form-data formatted string

const urlEncodedText = jsonToFormDataText(json, undefined, 'urlencoded');
console.log(urlEncodedText); // Outputs application/x-www-form-urlencoded string
```
