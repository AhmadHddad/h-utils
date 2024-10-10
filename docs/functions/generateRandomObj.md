[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / generateRandomObj

# Function: generateRandomObj()

> **generateRandomObj**(`fieldCount`, `options`?): `Record`\<`string`, `string` \| `number` \| `null` \| `boolean`\>

## Parameters

• **fieldCount**: `number`= `10`

• **options?**

• **options.allowNested?**: `boolean`

• **options.allowNull?**: `boolean`

## Returns

`Record`\<`string`, `string` \| `number` \| `null` \| `boolean`\>

## Description

will generate a random object

## Example

```ts
generateRandomObj() // {  JcaOXYeU: true, qZDEUnCs: 0.32064102262293903, RLvQgfll: true, GJSZIsnA: 413, iRjWgHkA: 'aNMnPg', aqXHzOuF: 'iGPp', ZVxrygDP: 252, KqrqvGbb: 'LuEdtd'}
```

## Default

```ts
10
```

## Default

```ts
{allowNested:true}
```

## Source

[src/utils/random/generateRandomObj.ts:10](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/random/generateRandomObj.ts#L10)
