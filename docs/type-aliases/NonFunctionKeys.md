[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / NonFunctionKeys

# Type Alias: NonFunctionKeys\<T\>

> **NonFunctionKeys**\<`T`\> = `{ [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K }`\[keyof `T`\]

Defined in: [src/utils/utilityTypes.ts:133](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L133)

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
