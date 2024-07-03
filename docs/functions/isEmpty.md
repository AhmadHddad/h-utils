[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`input`?): `boolean`

## Parameters

• **input?**: `any`

## Returns

`boolean`

A function that takes a value and returns a boolean.

## Description

It checks if the input is empty.

## Examples

```ts
isEmpty({}) => true;
```

```ts
isEmpty([]) => true;
```

```ts
isEmpty(0) => true;
```

```ts
isEmpty(false) => true;
```

```ts
isEmpty(true) => false;
```

```ts
isEmpty("") => true;
```

```ts
isEmpty("") => true;
```

## Source

[src/utils/validation/isEmpty.ts:14](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/validation/isEmpty.ts#L14)
