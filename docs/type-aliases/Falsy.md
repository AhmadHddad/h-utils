[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / Falsy

# Type Alias: Falsy

> **Falsy** = `false` \| `""` \| `0` \| `null` \| `undefined`

Defined in: [src/utils/utilityTypes.ts:82](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/utilityTypes.ts#L82)

Falsy

## Desc

Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`

## Example

```ts
type Various = 'a' | 'b' | undefined | false;

  // Expect: "a" | "b"
  Exclude<Various, Falsy>;
```
