[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / DeepPartial

# Type alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: _DeepPartial<T[P]> }`

DeepPartial

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

## Type parameters

• **T**

## Source

[src/utils/utilityTypes.ts:443](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/utilityTypes.ts#L443)
