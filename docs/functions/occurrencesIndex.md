[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / occurrencesIndex

# Function: occurrencesIndex()

> **occurrencesIndex**(`string`, `subString`, `allowOverlapping`?): `number`[]

Function that count occurrences count of a substring in a string;

## Parameters

• **string**: `string`

The string

• **subString**: `string`

The sub string to search for

• **allowOverlapping?**: `boolean`

Optional. (Default:false)

## Returns

`number`[]

## Example

```ts
`
occurrencesIndex("foofoofoo", "bar"); // []

  occurrencesIndex("foofoofoo", "foo"); //[ 3, 6, 9 ]

  occurrencesIndex("foofoofoo", "foofoo"); //[6]

  //allowOverlapping:true
  occurrencesIndex("foofoofoo", "foofoo", true); //[ 1, 4 ]
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

[src/utils/string/occurrencesIndex.ts:25](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/string/occurrencesIndex.ts#L25)
