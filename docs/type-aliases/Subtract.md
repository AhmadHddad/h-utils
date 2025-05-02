[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Subtract

# Type Alias: Subtract\<T, T1\>

> **Subtract**\<`T`, `T1`\> = `Pick`\<`T`, [`SetComplement`](SetComplement.md)\<keyof `T`, keyof `T1`\>\>

Defined in: [src/utils/utilityTypes.ts:232](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L232)

Subtract

## Type Parameters

### T

`T` *extends* `T1`

### T1

`T1` *extends* `object`

## Desc

From `T` remove properties that exist in `T1` (`T1` has a subset of the properties of `T`)

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { name: string; visible: boolean; }
  type RestProps = Subtract<Props, DefaultProps>;
```
