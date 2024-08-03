[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / ParseOptions

# Type alias: ParseOptions

> **ParseOptions**: `object`

## Type declaration

### arrayFormat?

> `optional` `readonly` **arrayFormat**: `"bracket"` \| `"index"` \| `"comma"` \| `"separator"` \| `"bracket-separator"` \| `"colon-list-separator"` \| `"none"`

#### Default

'none'

- `bracket`: Parse arrays with bracket representation:

  ```
  

  queryString.parse('foo[]=1&foo[]=2&foo[]=3', {arrayFormat: 'bracket'});
  //=> {foo: ['1', '2', '3']}
  ```

- `index`: Parse arrays with index representation:

  ```
  

  queryString.parse('foo[0]=1&foo[1]=2&foo[3]=3', {arrayFormat: 'index'});
  //=> {foo: ['1', '2', '3']}
  ```

- `comma`: Parse arrays with elements separated by comma:

  ```
  

  queryString.parse('foo=1,2,3', {arrayFormat: 'comma'});
  //=> {foo: ['1', '2', '3']}
  ```

- `separator`: Parse arrays with elements separated by a custom character:

  ```
  

  queryString.parse('foo=1|2|3', {arrayFormat: 'separator', arrayFormatSeparator: '|'});
  //=> {foo: ['1', '2', '3']}
  ```

- `bracket-separator`: Parse arrays (that are explicitly marked with brackets) with elements separated by a custom character:

  ```
  

  queryString.parse('foo[]', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> {foo: []}

  queryString.parse('foo[]=', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> {foo: ['']}

  queryString.parse('foo[]=1', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
   //=> {foo: ['1']}

  queryString.parse('foo[]=1|2|3', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> {foo: ['1', '2', '3']}

  queryString.parse('foo[]=1||3|||6', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> {foo: ['1', '', 3, '', '', '6']}

  queryString.parse('foo[]=1|2|3&bar=fluffy&baz[]=4', {arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
  //=> {foo: ['1', '2', '3'], bar: 'fluffy', baz:['4']}
  ```

- `colon-list-separator`: Parse arrays with parameter names that are explicitly marked with `:list`:

  ```
  

  queryString.parse('foo:list=one&foo:list=two', {arrayFormat: 'colon-list-separator'});
  //=> {foo: ['one', 'two']}
  ```

- `none`: Parse arrays with elements using duplicate keys:

  ```
  

  queryString.parse('foo=1&foo=2&foo=3');
  //=> {foo: ['1', '2', '3']}
  ```

### arrayFormatSeparator?

> `optional` `readonly` **arrayFormatSeparator**: `string`

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

#### Default

```ts
,
```

### decode?

> `optional` `readonly` **decode**: `boolean`

Decode the keys and values. URI components are decoded with [`decode-uri-component`](https://github.com/SamVerschueren/decode-uri-component).

#### Default

```ts
true
```

### lowerCaseQuery?

> `optional` `readonly` **lowerCaseQuery**: `boolean`

#### Default

```ts
false;
```

#### Example

```ts
queryString.parseUrl("https://foo.bar?Foo=bar&baz=Foo", {lowerCaseQuery:true}) // {query:{foo:"bar", baz:"Foo"}}
```

### parseBooleans?

> `optional` `readonly` **parseBooleans**: `boolean`

Parse the value as a boolean type instead of string type if it's a boolean.

#### Default

```ts
false
```

#### Example

```

queryString.parse('foo=true', {parseBooleans: true});
//=> {foo: true}
```

### parseFragmentIdentifier?

> `optional` `readonly` **parseFragmentIdentifier**: `boolean`

Parse the fragment identifier from the URL and add it to result object.

#### Default

```ts
false
```

#### Example

```

queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
//=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
```

### parseNumbers?

> `optional` `readonly` **parseNumbers**: `boolean`

Parse the value as a number type instead of string type if it's a number.

#### Default

```ts
false
```

#### Example

```

queryString.parse('foo=1', {parseNumbers: true});
//=> {foo: 1}
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

queryString.parse('?a=one&b=two&c=three', {
  sort: (itemLeft, itemRight) => order.indexOf(itemLeft) - order.indexOf(itemRight)
});
//=> {c: 'three', a: 'one', b: 'two'}
```

```

queryString.parse('?a=one&c=three&b=two', {sort: false});
//=> {a: 'one', c: 'three', b: 'two'}
```

## Source

[src/utils/types.ts:289](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/types.ts#L289)
