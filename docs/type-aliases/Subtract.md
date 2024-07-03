[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Subtract

# Type alias: Subtract\<T, T1\>

> **Subtract**\<`T`, `T1`\>: `Pick`\<`T`, [`SetComplement`](SetComplement.md)\<keyof `T`, keyof `T1`\>\>

Subtract

## Desc

From `T` remove properties that exist in `T1` (`T1` has a subset of the properties of `T`)

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { name: string; visible: boolean; }
  type RestProps = Subtract<Props, DefaultProps>;
```

## Type parameters

• **T** *extends* `T1`

• **T1** *extends* `object`

## Source

[src/utils/utilityTypes.ts:232](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L232)
