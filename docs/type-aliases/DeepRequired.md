[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / DeepRequired

# Type alias: DeepRequired\<T\>

> **DeepRequired**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `any`[] ? [`_DeepRequiredArray`](../interfaces/DeepRequiredArray.md)\<`T`\[`number`\]\> : `T` *extends* `object` ? [`_DeepRequiredObject`](DeepRequiredObject.md)\<`T`\> : `T`

DeepRequired

## Desc

Required that works for deeply nested structure

## Example

```ts
// Expect: {
  //   first: {
  //     second: {
  //       name: string;
  //     };
  //   };
  // }
  type NestedProps = {
    first?: {
      second?: {
        name?: string;
      };
    };
  };
  type RequiredNestedProps = DeepRequired<NestedProps>;
```

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:370](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L370)
