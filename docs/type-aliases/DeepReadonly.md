[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / DeepReadonly

# Type alias: DeepReadonly\<T\>

> **DeepReadonly**\<`T`\>: `T` *extends* (...`args`) => `any` \| [`Primitive`](Primitive.md) ? `T` : `T` *extends* [`_DeepReadonlyArray`](../interfaces/DeepReadonlyArray.md)\<infer U\> ? [`_DeepReadonlyArray`](../interfaces/DeepReadonlyArray.md)\<`U`\> : `T` *extends* [`_DeepReadonlyObject`](DeepReadonlyObject.md)\<infer V\> ? [`_DeepReadonlyObject`](DeepReadonlyObject.md)\<`V`\> : `T`

DeepReadonly

## Desc

Readonly that works for deeply nested structure

## Example

```ts
// Expect: {
  //   readonly first: {
  //     readonly second: {
  //       readonly name: string;
  //     };
  //   };
  // }
  type NestedProps = {
    first: {
      second: {
        name: string;
      };
    };
  };
  type ReadonlyNestedProps = DeepReadonly<NestedProps>;
```

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:335](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L335)
