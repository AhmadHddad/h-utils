[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Diff

# Type alias: Diff\<T, U\>

> **Diff**\<`T`, `U`\>: `Pick`\<`T`, [`SetDifference`](SetDifference.md)\<keyof `T`, keyof `U`\>\>

Diff

## Desc

From `T` remove properties that exist in `U`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { name: string; visible: boolean; }
  type DiffProps = Diff<Props, DefaultProps>;
```

## Type parameters

• **T** *extends* `object`

• **U** *extends* `object`

## Source

[src/utils/utilityTypes.ts:180](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L180)
