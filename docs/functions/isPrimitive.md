[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / isPrimitive

# Function: isPrimitive()

> **isPrimitive**(`val`): `val is Primitive`

Tests for one of the [`Primitive`](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types using the JavaScript [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator

Clarification: TypeScript overloads this operator to produce TypeScript types if used in context of types.

## Parameters

• **val**: `unknown`

The value to be tested

## Returns

`val is Primitive`

If `val` is primitive. If used in the flow of the program typescript will infer type-information from this.

## Example

```ts
const consumer = (value: Primitive | Primitive[]) => {
      if (isPrimitive(value)) {
          return console.log('Primitive value: ', value);
      }
      // type of value now inferred as Primitive[]
      value.map((primitive) => consumer(primitive));
  };
```

## Source

[src/utils/validation/isPrimitive.ts:20](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/validation/isPrimitive.ts#L20)
