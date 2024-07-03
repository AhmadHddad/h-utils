[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / count

# Function: count()

> **count**(`input`?, `options`?): `number`

## Parameters

• **input?**: `string` \| `number` \| `boolean` \| `object` \| []

• **options?**

• **options.trimString?**: `boolean`

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

## Source

[src/utils/general/count.ts:12](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/general/count.ts#L12)
