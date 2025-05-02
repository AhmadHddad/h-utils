[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / getBase64FromFile

# Function: getBase64FromFile()

> **getBase64FromFile**(`file`): `Promise`\<`string` \| `ArrayBuffer`\>

Defined in: [src/utils/file/getBase64FromFile.ts:6](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/file/getBase64FromFile.ts#L6)

## Parameters

### file

`File`

## Returns

`Promise`\<`string` \| `ArrayBuffer`\>

## Example

```ts
getBase64FromFile(new File([""], "filename")) => "data:application/octet-stream;base64,"
```
