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

[src/utils/utilityTypes.ts:67](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L67)
