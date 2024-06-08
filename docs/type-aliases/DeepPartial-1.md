[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / \_DeepPartial

# Type alias: \_DeepPartial\<T\>

> `private` **\_DeepPartial**\<`T`\>: `T` *extends* `Function` ? `T` : `T` *extends* infer U[] ? [`_DeepPartialArray`](../interfaces/DeepPartialArray.md)\<`U`\> : `T` *extends* `object` ? [`DeepPartial`](DeepPartial.md)\<`T`\> : `T` \| `undefined`

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:446](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/utilityTypes.ts#L446)
