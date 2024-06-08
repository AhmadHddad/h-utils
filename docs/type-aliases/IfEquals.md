[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / IfEquals

# Type alias: IfEquals\<X, Y, A, B\>

> **IfEquals**\<`X`, `Y`, `A`, `B`\>: \<`T`\>() => `T` *extends* `X` ? `1` : `2` *extends* \<`T`\>() => `T` *extends* `Y` ? `1` : `2` ? `A` : `B`

## Description

will check if X, Y are equal

## Type parameters

• **X**

• **Y**

• **A** = `X`

• **B** = `never`

## Source

[src/utils/utilityTypes.ts:67](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/utilityTypes.ts#L67)
