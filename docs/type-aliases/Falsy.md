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

[src/utils/utilityTypes.ts:82](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/utilityTypes.ts#L82)
