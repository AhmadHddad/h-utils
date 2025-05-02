[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\> = `{ [P in keyof T]?: _DeepPartial<T[P]> }`

Defined in: [src/utils/utilityTypes.ts:443](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L443)

DeepPartial

## Type Parameters

### T

`T`

## Desc

Partial that works for deeply nested structure

## Example

```ts
// Expect: {
  //   first?: {
  //     second?: {
  //       name?: string;
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
  type PartialNestedProps = DeepPartial<NestedProps>;
```
