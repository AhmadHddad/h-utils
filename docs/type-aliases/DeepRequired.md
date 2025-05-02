[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / DeepRequired

# Type Alias: DeepRequired\<T\>

> **DeepRequired**\<`T`\> = `T` *extends* (...`args`) => `any` ? `T` : `T` *extends* `any`[] ? `_DeepRequiredArray`\<`T`\[`number`\]\> : `T` *extends* `object` ? `_DeepRequiredObject`\<`T`\> : `T`

Defined in: [src/utils/utilityTypes.ts:370](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L370)

DeepRequired

## Type Parameters

### T

`T`

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
