[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / IfEquals

# Type Alias: IfEquals\<X, Y, A, B\>

> **IfEquals**\<`X`, `Y`, `A`, `B`\> = \<`T`\>() => `T` *extends* `X` ? `1` : `2` *extends* \<`T`\>() => `T` *extends* `Y` ? `1` : `2` ? `A` : `B`

Defined in: [src/utils/utilityTypes.ts:67](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L67)

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
