[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isObjHasValues

# Function: isObjHasValues()

> **isObjHasValues**(`param`, `__namedParameters`): `boolean`

## Parameters

• **param**: `object` \| `object`

• **\_\_namedParameters**

• **\_\_namedParameters.predict?**

• **\_\_namedParameters.truthyValues**: `boolean`= `false`

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

## Source

[src/utils/validation/isObjHasValues.ts:15](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/validation/isObjHasValues.ts#L15)
