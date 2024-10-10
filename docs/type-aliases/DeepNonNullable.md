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

[src/utils/utilityTypes.ts:407](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L407)
