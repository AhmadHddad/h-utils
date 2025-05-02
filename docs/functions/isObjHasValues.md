[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / isObjHasValues

# Function: isObjHasValues()

> **isObjHasValues**(`param`, `__namedParameters`): `boolean`

Defined in: [src/utils/validation/isObjHasValues.ts:15](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/validation/isObjHasValues.ts#L15)

## Parameters

### param

`object` | \{ \}

### \_\_namedParameters

#### predict?

(`p?`) => `boolean`

#### truthyValues

`boolean` = `false`

## Returns

`boolean`

## Description

will check if the passed object has values.
If truthyValues is passed then will check if values are truthy => 0 is false, empty string also false and so on.
you can pass predict callback.

## Examples

```ts
isObjHasValues({a:1}) => true
```

```ts
isObjHasValues({a:""}) => true
```

```ts
isObjHasValues({a:""}, {truthyValues:true}) => false
```

```ts
isObjHasValues({a:"1"}, {truthyValues:true}) => true
```

```ts
isObjHasValues({a:"1"}, {predict:val => typeof val === "number"}) => false
```
