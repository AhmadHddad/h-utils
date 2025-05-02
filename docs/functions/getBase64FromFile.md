[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getBase64FromFile

# Function: getBase64FromFile()

> **getBase64FromFile**(`file`): `Promise`\<`string` \| `ArrayBuffer`\>

Defined in: [src/utils/file/getBase64FromFile.ts:6](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/file/getBase64FromFile.ts#L6)

## Parameters

### file

`File`

## Returns

`Promise`\<`string` \| `ArrayBuffer`\>

## Example

```ts
getBase64FromFile(new File([""], "filename")) => "data:application/octet-stream;base64,"
```
