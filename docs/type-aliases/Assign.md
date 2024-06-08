[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Assign

# Type alias: Assign\<T, U, I\>

> **Assign**\<`T`, `U`, `I`\>: `Pick`\<`I`, keyof `I`\>

Assign

## Desc

From `U` assign properties to `T` (just like object assign)

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type NewProps = { age: string; other: string };

  // Expect: { name: string; age: number; visible: boolean; other: string; }
  type ExtendedProps = Assign<Props, NewProps>;
```

## Type parameters

• **T** *extends* `object`

• **U** *extends* `object`

• **I** = [`Diff`](Diff.md)\<`T`, `U`\> & [`Intersection`](Intersection.md)\<`U`, `T`\> & [`Diff`](Diff.md)\<`U`, `T`\>

## Source

[src/utils/utilityTypes.ts:278](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/utilityTypes.ts#L278)
