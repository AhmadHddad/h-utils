[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / \_DeepPartial

# Type alias: \_DeepPartial\<T\>

> `private` **\_DeepPartial**\<`T`\>: `T` *extends* `Function` ? `T` : `T` *extends* infer U[] ? [`_DeepPartialArray`](../interfaces/DeepPartialArray.md)\<`U`\> : `T` *extends* `object` ? [`DeepPartial`](DeepPartial.md)\<`T`\> : `T` \| `undefined`

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:446](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L446)
