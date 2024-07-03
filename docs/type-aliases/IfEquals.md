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

[src/utils/utilityTypes.ts:67](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L67)
