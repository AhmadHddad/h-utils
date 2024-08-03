[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Intersection

# Type alias: Intersection\<T, U\>

> **Intersection**\<`T`, `U`\>: `Pick`\<`T`, `Extract`\<keyof `T`, keyof `U`\> & `Extract`\<keyof `U`, keyof `T`\>\>

Intersection

## Desc

From `T` pick properties that exist in `U`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { age: number; }
  type DuplicateProps = Intersection<Props, DefaultProps>;
```

## Type parameters

• **T** *extends* `object`

• **U** *extends* `object`

## Source

[src/utils/utilityTypes.ts:247](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L247)
