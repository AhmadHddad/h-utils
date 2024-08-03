[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / getBase64FromFile

# Function: getBase64FromFile()

> **getBase64FromFile**(`file`): `Promise`\<`ArrayBuffer` \| `string`\>

## Parameters

• **file**: `File`

## Returns

`Promise`\<`ArrayBuffer` \| `string`\>

## Example

```ts
getBase64FromFile(new File([""], "filename")) => "data:application/octet-stream;base64,"
```

## Source

[src/utils/file/getBase64FromFile.ts:6](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/file/getBase64FromFile.ts#L6)
