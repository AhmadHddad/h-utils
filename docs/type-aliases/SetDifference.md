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

[src/utils/utilityTypes.ts:168](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L168)
