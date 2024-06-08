[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / StringifyOptions

# Type alias: StringifyOptions

> **StringifyOptions**: `object`

## Type declaration

### arrayFormat?

> `optional` `readonly` **arrayFormat**: `"bracket"` \| `"index"` \| `"comma"` \| `"separator"` \| `"bracket-separator"` \| `"colon-list-separator"` \| `"none"`

#### Default

'none'

- `bracket`: Serialize arrays using bracket representation:

  ```
  

  queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'bracket'});
  //=> 'foo[]=1&foo[]=2&foo[]=3'
  ```

- `index`: Serialize arrays using index representation:

  ```
  

  queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'index'});
  //=> 'foo[0]=1&foo[1]=2&foo[2]=3'
  ```

- `comma`: Serialize arrays by separating elements with comma:

  ```
  

  queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'comma'});
  //=> 'foo=1,2,3'

  queryString.stringify({foo: [1, null, '']}, {arrayFormat: 'comma'});
  //=> 'foo=1,,'
  // Note that typing information for null values is lost
  // and `.parse('foo=1,,')` would return `{foo: [1, '', '']}`.
  ```

- `separator`: Serialize arrays by separating elements with character:

  ```
  

  queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'separator', arrayFormatSeparator: '|'});
  //=> 'foo=1|2|3'
  ```

- `bracket-separator`: Serialize arrays by explicitly post-fixing array names with brackets and separating elements with a custom character:

  ```
  

  queryString.stringify({foo: []}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> 'foo[]'

  queryString.stringify({foo: ['']}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> 'foo[]='

  queryString.stringify({foo: [1]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> 'foo[]=1'

  queryString.stringify({foo: [1, 2, 3]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> 'foo[]=1|2|3'

  queryString.stringify({foo: [1, '', 3, null, null, 6]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> 'foo[]=1||3|||6'

  queryString.stringify({foo: [1, '', 3, null, null, 6]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|', skipNull: true});
  //=> 'foo[]=1||3|6'

  queryString.stringify({foo: [1, 2, 3], bar: 'fluffy', baz: [4]}, {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> 'foo[]=1|2|3&bar=fluffy&baz[]=4'
  ```

- `colon-list-separator`: Serialize arrays with parameter names that are explicitly marked with `:list`:

  ```js
  

  queryString.stringify({foo: ['one', 'two']}, {arrayFormat: 'colon-list-separator'});
  //=> 'foo:list=one&foo:list=two'
  ```

- `none`: Serialize arrays by using duplicate keys:

  ```
  

  queryString.stringify({foo: [1, 2, 3]});
  //=> 'foo=1&foo=2&foo=3'
  ```

### arrayFormatSeparator?

> `optional` `readonly` **arrayFormatSeparator**: `string`

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

#### Default

```ts
,
```

### encode?

> `optional` `readonly` **encode**: `boolean`

[URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values.

#### Default

```ts
true
```

### params?

> `optional` `readonly` **params**: [`StringOrNumber`](StringOrNumber.md)[]

### skipEmptyString?

> `optional` `readonly` **skipEmptyString**: `boolean`

Skip keys with an empty string as the value.

#### Default

```ts
false
```

#### Examples

```

queryString.stringify({a: 1, b: '', c: '', d: 4}, {
  skipEmptyString: true
});
//=> 'a=1&d=4'
```

```

queryString.stringify({a: '', b: ''}, {
  skipEmptyString: true
});
//=> ''
```

### skipNull?

> `optional` `readonly` **skipNull**: `boolean`

Skip keys with `null` as the value.

Note that keys with `undefined` as the value are always skipped.

#### Default

```ts
false
```

#### Example

```

queryString.stringify({a: 1, b: undefined, c: null, d: 4}, {
  skipNull: true
});
//=> 'a=1&d=4'

queryString.stringify({a: undefined, b: null}, {
  skipNull: true
});
//=> ''
```

### sort?

> `optional` `readonly` **sort**: (`itemLeft`, `itemRight`) => `number` \| `false`

Supports both `Function` as a custom sorting function or `false` to disable sorting.

If omitted, keys are sorted using `Array#sort`, which means, converting them to strings and comparing strings in Unicode code point order.

#### Default

```ts
true
```

#### Examples

```

const order = ['c', 'a', 'b'];

queryString.stringify({a: 1, b: 2, c: 3}, {
  sort: (itemLeft, itemRight) => order.indexOf(itemLeft) - order.indexOf(itemRight)
});
//=> 'c=3&a=1&b=2'
```

```

queryString.stringify({b: 1, c: 2, a: 3}, {sort: false});
//=> 'b=1&c=2&a=3'
```

### strict?

> `optional` `readonly` **strict**: `boolean`

Strictly encode URI components with [`strict-uri-encode`](https://github.com/kevva/strict-uri-encode). It uses [`encodeURIComponent`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) if set to `false`. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option.

#### Default

```ts
true
```

## Source

[src/utils/types.ts:49](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/types.ts#L49)
