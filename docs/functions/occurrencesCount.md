[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / occurrencesCount

# Function: occurrencesCount()

> **occurrencesCount**(`string`, `subString`, `allowOverlapping`?): `number`

Function that count occurrences count of a substring in a string;

## Parameters

• **string**: `string`

The string

• **subString**: `string`

The sub string to search for

• **allowOverlapping?**: `boolean`

Optional. (Default:false)

## Returns

`number`

## Example

```ts
`
occurrencesCount("foofoofoo", "bar"); //0

  occurrencesCount("foofoofoo", "foo"); //3

  occurrencesCount("foofoofoo", "foofoo"); //1

  //allowOverlapping:true
  occurrencesCount("foofoofoo", "foofoo", true); //2
   foofoofoo
 1`----´
   2  `----´

`
```

## Author

Vitim.us https://gist.github.com/victornpb/7736865

## See

 - Unit Test https://jsfiddle.net/Victornpb/5axuh96u/
 - https://stackoverflow.com/a/7924240/938822

## Source

[src/utils/string/occurrencesCount.ts:25](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/string/occurrencesCount.ts#L25)
