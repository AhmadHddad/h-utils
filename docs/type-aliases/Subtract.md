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

[src/utils/utilityTypes.ts:232](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L232)
