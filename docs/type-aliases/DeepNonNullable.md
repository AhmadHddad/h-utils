[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / DeepNonNullable

# Type alias: DeepNonNullable\<T\>

> **DeepNonNullable**\<`T`\>: `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `any`[] ? [`_DeepNonNullableArray`](../interfaces/DeepNonNullableArray.md)\<`T`\[`number`\]\> : `T` *extends* `object` ? [`_DeepNonNullableObject`](DeepNonNullableObject.md)\<`T`\> : `T`

DeepNonNullable

## Desc

NonNullable that works for deeply nested structure

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
    first?: null | {
      second?: null | {
        name?: string | null |
        undefined;
      };
    };
  };
  type RequiredNestedProps = DeepNonNullable<NestedProps>;
```

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:407](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L407)
