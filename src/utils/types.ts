export type Fn = (this: any, ...args: any[]) => any;
export type {
  Falsy,
  KeysArr,
  PredicateFunc,
  Key,
  Primitive,
} from './utilityTypes';

export type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
};

export type ParseStringOptions = {
  parseStrStartsWithZero?: boolean;
  decode?: boolean;
};

export type DateComparisonLevel =
  | 'full'
  | 'year'
  | 'month'
  | 'day'
  | 'year-month'
  | 'hour'
  | 'year-month-day'
  | 'year-month-day-hour';

export type GroupedObject<T> = { [key: string]: T[] };
export type EventCallback = (data?: any) => void;

export interface PointObject {
  x: number;
  y: number;
  z?: number;
}

export type Point2D = [number, number];
export type Point3D = [number, number, number];

export type ColorScheme = 'light' | 'dark';

export type StringOrNumber = number | string;

export type Utf8EncodeTypes = string | number | {} | [] | boolean;

export type StringifyOptions = {
  /**
  Strictly encode URI components with [`strict-uri-encode`](https://github.com/kevva/strict-uri-encode). It uses [`encodeURIComponent`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) if set to `false`. You probably [don't care](https://github.com/sindresorhus/query-string/issues/42) about this option.
 
  @default true
  */
  readonly strict?: boolean;

  /**
  [URL encode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) the keys and values.
 
  @default true
  */
  readonly encode?: boolean;

  /**
  @default 'none'
 
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
  */
  readonly arrayFormat?:
    | 'bracket'
    | 'index'
    | 'comma'
    | 'separator'
    | 'bracket-separator'
    | 'colon-list-separator'
    | 'none';

  /**
  The character used to separate array elements when using `{arrayFormat: 'separator'}`.
 
  @default ,
  */
  readonly arrayFormatSeparator?: string;

  /**
  Supports both `Function` as a custom sorting function or `false` to disable sorting.
 
  If omitted, keys are sorted using `Array#sort`, which means, converting them to strings and comparing strings in Unicode code point order.
 
  @default true
 
  @example
  ```
  
 
  const order = ['c', 'a', 'b'];
 
  queryString.stringify({a: 1, b: 2, c: 3}, {
    sort: (itemLeft, itemRight) => order.indexOf(itemLeft) - order.indexOf(itemRight)
  });
  //=> 'c=3&a=1&b=2'
  ```
 
  @example
  ```
  
 
  queryString.stringify({b: 1, c: 2, a: 3}, {sort: false});
  //=> 'b=1&c=2&a=3'
  ```
  */
  readonly sort?: ((itemLeft: string, itemRight: string) => number) | false;

  /**
  Skip keys with `null` as the value.
 
  Note that keys with `undefined` as the value are always skipped.
 
  @default false
 
  @example
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
  */
  readonly skipNull?: boolean;

  /**
  Skip keys with an empty string as the value.
 
  @default false
 
  @example
  ```
  
 
  queryString.stringify({a: 1, b: '', c: '', d: 4}, {
    skipEmptyString: true
  });
  //=> 'a=1&d=4'
  ```
 
  @example
  ```
 
  queryString.stringify({a: '', b: ''}, {
    skipEmptyString: true
  });
  //=> ''
  ```
  */
  readonly skipEmptyString?: boolean;

  readonly params?: StringOrNumber[];
};

export type Stringifiable = string | boolean | number | null | undefined; // eslint-disable-line @typescript-eslint/ban-types

export type UrlObject = {
  readonly url: string;

  /**
  Overrides queries in the `url` property.
  */
  readonly query?: StringifiableRecord;

  /**
  Overrides the fragment identifier in the `url` property.
  */
  readonly fragmentIdentifier?: string;
};

export type StringifiableRecord = Record<
  string,
  Stringifiable | readonly Stringifiable[]
>;

export type ParsedQuery<T = string> = Record<
  string,
  T | null | Array<T | null>
>;

export type ParsedUrl = {
  readonly url: string;
  readonly query: ParsedQuery;

  /**
  The fragment identifier of the URL.
 
  Present when the `parseFragmentIdentifier` option is `true`.
  */
  readonly fragmentIdentifier?: string;
};

export type ParseOptions = {
  /**
  Decode the keys and values. URI components are decoded with [`decode-uri-component`](https://github.com/SamVerschueren/decode-uri-component).
 
  @default true
  */
  readonly decode?: boolean;

  /**
  @default 'none'
 
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
  */
  readonly arrayFormat?:
    | 'bracket'
    | 'index'
    | 'comma'
    | 'separator'
    | 'bracket-separator'
    | 'colon-list-separator'
    | 'none';

  /**
  The character used to separate array elements when using `{arrayFormat: 'separator'}`.
 
  @default ,
  */
  readonly arrayFormatSeparator?: string;

  /**
  Supports both `Function` as a custom sorting function or `false` to disable sorting.
 
  If omitted, keys are sorted using `Array#sort`, which means, converting them to strings and comparing strings in Unicode code point order.
 
  @default true
 
  @example
  ```
  
 
  const order = ['c', 'a', 'b'];
 
  queryString.parse('?a=one&b=two&c=three', {
    sort: (itemLeft, itemRight) => order.indexOf(itemLeft) - order.indexOf(itemRight)
  });
  //=> {c: 'three', a: 'one', b: 'two'}
  ```
 
  @example
  ```
  
 
  queryString.parse('?a=one&c=three&b=two', {sort: false});
  //=> {a: 'one', c: 'three', b: 'two'}
  ```
  */
  readonly sort?: ((itemLeft: string, itemRight: string) => number) | false;

  /**
  Parse the value as a number type instead of string type if it's a number.
 
  @default false
 
  @example
  ```
  
 
  queryString.parse('foo=1', {parseNumbers: true});
  //=> {foo: 1}
  ```
  */
  readonly parseNumbers?: boolean;

  /**
  Parse the value as a boolean type instead of string type if it's a boolean.
 
  @default false
 
  @example
  ```
  
 
  queryString.parse('foo=true', {parseBooleans: true});
  //=> {foo: true}
  ```
  */
  readonly parseBooleans?: boolean;

  /**
  Parse the fragment identifier from the URL and add it to result object.
 
  @default false
 
  @example
  ```
  
 
  queryString.parseUrl('https://foo.bar?foo=bar#xyz', {parseFragmentIdentifier: true});
  //=> {url: 'https://foo.bar', query: {foo: 'bar'}, fragmentIdentifier: 'xyz'}
  ```
  */
  readonly parseFragmentIdentifier?: boolean;

  /**
   * @default false;
   * @example queryString.parseUrl("https://foo.bar?Foo=bar&baz=Foo", {lowerCaseQuery:true}) // {query:{foo:"bar", baz:"Foo"}}
   */
  readonly lowerCaseQuery?: boolean;
};

export type GetHtmlElementCoordsOptions = {
  position:
    | 'top left'
    | 'top center'
    | 'top right'
    | 'center left'
    | 'center'
    | 'center right'
    | 'bottom left'
    | 'bottom center'
    | 'bottom right';
  precise: boolean;
};

export declare namespace ClassNames {
  type Value = string | number | boolean | undefined | null;
  type Mapping = Record<string, unknown>;
  interface ArgumentArray extends Array<Argument> {}
  type Argument = Value | Mapping | ArgumentArray;
}

export type AttemptOptions = {
  errorHander?: (e: any) => any;
  returnError?: boolean;
  throwError?: boolean;
};

export type ChangeCallback<T> = (prevValue: T, newValue: T) => void;

export interface Cookie {
  name: string;
  value: string;
  domain?: string;
  path?: string;
}

export type PipeFunction<T, U> = (input: T) => U;
