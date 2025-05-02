[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / DeepReadonly

# Type Alias: DeepReadonly\<T\>

> **DeepReadonly**\<`T`\> = `T` *extends* (...`args`) => `any` \| [`Primitive`](Primitive.md) ? `T` : `T` *extends* `_DeepReadonlyArray`\<infer U\> ? `_DeepReadonlyArray`\<`U`\> : `T` *extends* `_DeepReadonlyObject`\<infer V\> ? `_DeepReadonlyObject`\<`V`\> : `T`

Defined in: [src/utils/utilityTypes.ts:335](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L335)

DeepReadonly

## Type Parameters

### T

`T`

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
