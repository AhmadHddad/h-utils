[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\> = `{ [P in keyof T]?: _DeepPartial<T[P]> }`

Defined in: [src/utils/utilityTypes.ts:443](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L443)

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
