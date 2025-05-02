[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Diff

# Type Alias: Diff\<T, U\>

> **Diff**\<`T`, `U`\> = `Pick`\<`T`, [`SetDifference`](SetDifference.md)\<keyof `T`, keyof `U`\>\>

Defined in: [src/utils/utilityTypes.ts:180](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L180)

Diff

## Type Parameters

### T

`T` *extends* `object`

### U

`U` *extends* `object`

## Desc

From `T` remove properties that exist in `U`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { name: string; visible: boolean; }
  type DiffProps = Diff<Props, DefaultProps>;
```
