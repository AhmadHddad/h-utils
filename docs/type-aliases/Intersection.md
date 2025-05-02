[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Intersection

# Type Alias: Intersection\<T, U\>

> **Intersection**\<`T`, `U`\> = `Pick`\<`T`, `Extract`\<keyof `T`, keyof `U`\> & `Extract`\<keyof `U`, keyof `T`\>\>

Defined in: [src/utils/utilityTypes.ts:247](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L247)

Intersection

## Type Parameters

### T

`T` *extends* `object`

### U

`U` *extends* `object`

## Desc

From `T` pick properties that exist in `U`

## Example

```ts
type Props = { name: string; age: number; visible: boolean };
  type DefaultProps = { age: number };

  // Expect: { age: number; }
  type DuplicateProps = Intersection<Props, DefaultProps>;
```
