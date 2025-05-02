[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / DeepNonNullable

# Type Alias: DeepNonNullable\<T\>

> **DeepNonNullable**\<`T`\> = `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `any`[] ? `_DeepNonNullableArray`\<`T`\[`number`\]\> : `T` *extends* `object` ? `_DeepNonNullableObject`\<`T`\> : `T`

Defined in: [src/utils/utilityTypes.ts:407](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L407)

DeepNonNullable

## Type Parameters

### T

`T`

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
