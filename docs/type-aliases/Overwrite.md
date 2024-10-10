[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Overwrite

# Type alias: Overwrite\<T, U, I\>

> **Overwrite**\<`T`, `U`, `I`\>: `Pick`\<`I`, keyof `I`\>

Overwrite

## Desc

From `U` overwrite properties to `T`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type NewProps = { age: string; other: string };

  // Expect: { name: string; age: string; visible: boolean; }
  type ReplacedProps = Overwrite<Props, NewProps>;
```

## Type parameters

• **T** *extends* `object`

• **U** *extends* `object`

• **I** = [`Diff`](Diff.md)\<`T`, `U`\> & [`Intersection`](Intersection.md)\<`U`, `T`\>

## Source

[src/utils/utilityTypes.ts:262](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/utilityTypes.ts#L262)
