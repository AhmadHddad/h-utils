[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / \_DeepPartial

# Type alias: \_DeepPartial\<T\>

> `private` **\_DeepPartial**\<`T`\>: `T` *extends* `Function` ? `T` : `T` *extends* infer U[] ? [`_DeepPartialArray`](../interfaces/DeepPartialArray.md)\<`U`\> : `T` *extends* `object` ? [`DeepPartial`](DeepPartial.md)\<`T`\> : `T` \| `undefined`

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:446](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L446)
