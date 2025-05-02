[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / IfEquals

# Type Alias: IfEquals\<X, Y, A, B\>

> **IfEquals**\<`X`, `Y`, `A`, `B`\> = \<`T`\>() => `T` *extends* `X` ? `1` : `2` *extends* \<`T`\>() => `T` *extends* `Y` ? `1` : `2` ? `A` : `B`

Defined in: [src/utils/utilityTypes.ts:67](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L67)

## Type Parameters

### X

`X`

### Y

`Y`

### A

`A` = `X`

### B

`B` = `never`

## Description

will check if X, Y are equal
