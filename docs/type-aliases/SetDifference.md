[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / SetDifference

# Type alias: SetDifference\<A, B\>

> **SetDifference**\<`A`, `B`\>: `A` *extends* `B` ? `never` : `A`

SetDifference (same as Exclude)

## Desc

Set difference of given union types `A` and `B`

## Example

```ts
// Expect: "1"
  SetDifference<'1' | '2' | '3', '2' | '3' | '4'>;

  // Expect: string | number
  SetDifference<string | number | (() => void), Function>;
```

## Type parameters

• **A**

• **B**

## Source

[src/utils/utilityTypes.ts:168](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L168)
