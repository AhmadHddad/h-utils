[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / count

# Function: count()

> **count**(`input?`, `options?`): `number`

Defined in: [src/utils/general/count.ts:12](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/general/count.ts#L12)

## Parameters

### input?

`string` | `number` | `boolean` | \{ \} | \[\]

### options?

#### trimString

`boolean`

## Returns

`number`

## Description

Will return the length of the passed param wether if it was obj, array or a string.

## Examples

```ts
count([1,2,3]) => 3
```

```ts
count("js") => 2
```

```ts
count("  ", {trimString:true}) => 0
```

```ts
count("  ", {trimString:false}) => 2
```

```ts
count({a:1,b:2}) => 2
```

```ts
count(true) => 1
```

```ts
count(false) => 0
```

```ts
count({a:1,b:2}) => 2
```
