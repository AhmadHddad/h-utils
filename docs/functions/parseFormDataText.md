[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / parseFormDataText

# Function: parseFormDataText()

> **parseFormDataText**(`dataText`, `boundary`?): `Record`\<`string`, `unknown`\>

Parses a multipart/form-data or application/x-www-form-urlencoded formatted string into a JSON object.

This function handles both `multipart` formatted strings and URL-encoded strings, converting them into
a JSON object. It can process multipart types such as `form-data`, `related`, and `mixed`, as well as
application/x-www-form-urlencoded. If a boundary is not provided, it will be inferred from the input text.

## Parameters

• **dataText**: `string`

The formatted string to parse, either multipart or URL-encoded.

• **boundary?**: `string`

The boundary string used to separate parts of the form data (required for multipart).

## Returns

`Record`\<`string`, `unknown`\>

- A JSON object representing the parsed data.

## Example

```ts
const formDataText = 
`------WebKitFormBoundary123456\r\n
Content-Disposition: form-data; name="username"\r\n\r\n
john_doe\r\n
------WebKitFormBoundary123456--\r\n`;
const parsedData = parseFormDataText(formDataText);
console.log(parsedData); // { username: 'john_doe' }

const urlEncodedData = 'username=john_doe&age=30';
const parsedUrlData = parseFormDataText(urlEncodedData);
console.log(parsedUrlData); // { username: 'john_doe', age: '30' }
```

## Source

src/utils/formData/parseFormDataText.ts:27
