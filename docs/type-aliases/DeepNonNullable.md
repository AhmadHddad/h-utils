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

[src/utils/utilityTypes.ts:407](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L407)
