[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / ParseOptions

# Type Alias: ParseOptions

> **ParseOptions** = `object`

Defined in: [src/utils/types.ts:289](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L289)

## Properties

### arrayFormat?

> `readonly` `optional` **arrayFormat**: `"bracket"` \| `"index"` \| `"comma"` \| `"separator"` \| `"bracket-separator"` \| `"colon-list-separator"` \| `"none"`

Defined in: [src/utils/types.ts:378](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L378)

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

***

### arrayFormatSeparator?

> `readonly` `optional` **arrayFormatSeparator**: `string`

Defined in: [src/utils/types.ts:392](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L392)

The character used to separate array elements when using `{arrayFormat: 'separator'}`.

#### Default

```ts
,
```

***

### decode?

> `readonly` `optional` **decode**: `boolean`

Defined in: [src/utils/types.ts:295](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L295)

Decode the keys and values. URI components are decoded with [`decode-uri-component`](https://github.com/SamVerschueren/decode-uri-component).

#### Default

```ts
true
```

***

### lowerCaseQuery?

> `readonly` `optional` **lowerCaseQuery**: `boolean`

Defined in: [src/utils/types.ts:472](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L472)

#### Default

```ts
false;
```

#### Example

```ts
queryString.parseUrl("https://foo.bar?Foo=bar&baz=Foo", {lowerCaseQuery:true}) // {query:{foo:"bar", baz:"Foo"}}
```

***

### parseBooleans?

> `readonly` `optional` **parseBooleans**: `boolean`

Defined in: [src/utils/types.ts:451](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L451)

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

***

### parseFragmentIdentifier?

> `readonly` `optional` **parseFragmentIdentifier**: `boolean`

Defined in: [src/utils/types.ts:466](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L466)

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

***

### parseNumbers?

> `readonly` `optional` **parseNumbers**: `boolean`

Defined in: [src/utils/types.ts:436](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L436)

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

***

### sort?

> `readonly` `optional` **sort**: (`itemLeft`, `itemRight`) => `number` \| `false`

Defined in: [src/utils/types.ts:421](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L421)

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
