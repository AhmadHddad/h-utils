[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / Falsy

# Type alias: Falsy

> **Falsy**: `false` \| `""` \| `0` \| `null` \| `undefined`

Falsy

## Desc

Type representing falsy values in TypeScript: `false | "" | 0 | null | undefined`

## Example

```ts
type Various = 'a' | 'b' | undefined | false;

  // Expect: "a" | "b"
  Exclude<Various, Falsy>;
```

## Source

[src/utils/utilityTypes.ts:82](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/utilityTypes.ts#L82)
