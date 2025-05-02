[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / NonFunctionKeys

# Type Alias: NonFunctionKeys\<T\>

> **NonFunctionKeys**\<`T`\> = `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:133](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/utilityTypes.ts#L133)

NonFunctionKeys

## Type Parameters

### T

`T` *extends* `object`

## Desc

Get union type of keys that are non-functions in object type `T`

## Example

```ts
type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};

  // Expect: "name | someKey"
  type Keys = NonFunctionKeys<MixedProps>;
```
