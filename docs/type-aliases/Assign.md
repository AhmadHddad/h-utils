[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Assign

# Type Alias: Assign\<T, U, I\>

> **Assign**\<`T`, `U`, `I`\> = `Pick`\<`I`, keyof `I`\>

Defined in: [src/utils/utilityTypes.ts:278](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L278)

Assign

## Type Parameters

### T

`T` *extends* `object`

### U

`U` *extends* `object`

### I

`I` = [`Diff`](Diff.md)\<`T`, `U`\> & [`Intersection`](Intersection.md)\<`U`, `T`\> & [`Diff`](Diff.md)\<`U`, `T`\>

## Desc

From `U` assign properties to `T` (just like object assign)

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type NewProps = { age: string; other: string };

  // Expect: { name: string; age: number; visible: boolean; other: string; }
  type ExtendedProps = Assign<Props, NewProps>;
```
