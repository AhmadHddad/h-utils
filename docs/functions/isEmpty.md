[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isEmpty

# Function: isEmpty()

> **isEmpty**(`input?`): `boolean`

Defined in: [src/utils/validation/isEmpty.ts:14](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/validation/isEmpty.ts#L14)

## Parameters

### input?

`any`

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
