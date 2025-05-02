[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / FunctionKeys

# Type Alias: FunctionKeys\<T\>

> **FunctionKeys**\<`T`\> = `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:120](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L120)

FunctionKeys

## Type Parameters

### T

`T` *extends* `object`

## Desc

Get union type of keys that are functions in object type `T`

## Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "setName | someFn"
  type Keys = FunctionKeys<MixedProps>;
```
