[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Overwrite

# Type Alias: Overwrite\<T, U, I\>

> **Overwrite**\<`T`, `U`, `I`\> = `Pick`\<`I`, keyof `I`\>

Defined in: [src/utils/utilityTypes.ts:262](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L262)

Overwrite

## Type Parameters

### T

`T` *extends* `object`

### U

`U` *extends* `object`

### I

`I` = [`Diff`](Diff.md)\<`T`, `U`\> & [`Intersection`](Intersection.md)\<`U`, `T`\>

## Desc

From `U` overwrite properties to `T`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type NewProps = { age: string; other: string };

  // Expect: { name: string; age: string; visible: boolean; }
  type ReplacedProps = Overwrite<Props, NewProps>;
```
