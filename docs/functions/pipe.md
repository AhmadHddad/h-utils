[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / pipe

# Function: pipe()

## pipe(ab)

> **pipe**\<`A`, `B`\>(`ab`): (...`args`) => `B`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

### Parameters

• **ab**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`B`

### Description

Create a new function which pipes its value through the list functions.

### Example

```ts
const difference = (a: number, b: number) => a - b;
const add1 = (n: number) => n + 1;

const differenceThenAdd1 = pipe(
   difference,
   add1,
);
const result: number = differenceThenAdd1(5, 4); //2
```

### Source

[src/utils/functions/pipe.ts:16](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L16)

## pipe(ab, bc)

> **pipe**\<`A`, `B`, `C`\>(`ab`, `bc`): (...`args`) => `C`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

### Parameters

• **ab**

• **bc**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`C`

### Source

[src/utils/functions/pipe.ts:19](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L19)

## pipe(ab, bc, cd)

> **pipe**\<`A`, `B`, `C`, `D`\>(`ab`, `bc`, `cd`): (...`args`) => `D`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

### Parameters

• **ab**

• **bc**

• **cd**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`D`

### Source

[src/utils/functions/pipe.ts:23](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L23)

## pipe(ab, bc, cd, de)

> **pipe**\<`A`, `B`, `C`, `D`, `E`\>(`ab`, `bc`, `cd`, `de`): (...`args`) => `E`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

• **E**

### Parameters

• **ab**

• **bc**

• **cd**

• **de**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`E`

### Source

[src/utils/functions/pipe.ts:28](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L28)

## pipe(ab, bc, cd, de, ef)

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`\>(`ab`, `bc`, `cd`, `de`, `ef`): (...`args`) => `F`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

• **E**

• **F**

### Parameters

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`F`

### Source

[src/utils/functions/pipe.ts:34](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L34)

## pipe(ab, bc, cd, de, ef, fg)

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`): (...`args`) => `G`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

### Parameters

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`G`

### Source

[src/utils/functions/pipe.ts:41](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L41)

## pipe(ab, bc, cd, de, ef, fg, gh)

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): (...`args`) => `H`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

### Parameters

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

• **gh**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`H`

### Source

[src/utils/functions/pipe.ts:49](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L49)

## pipe(ab, bc, cd, de, ef, fg, gh, hi)

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): (...`args`) => `I`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

### Parameters

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

• **gh**

• **hi**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`I`

### Source

[src/utils/functions/pipe.ts:58](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L58)

## pipe(ab, bc, cd, de, ef, fg, gh, hi, ij)

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): (...`args`) => `J`

### Type parameters

• **A** *extends* `unknown`[]

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

• **J**

### Parameters

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

• **gh**

• **hi**

• **ij**

### Returns

`Function`

#### Parameters

• ...**args**: `A`

#### Returns

`J`

### Source

[src/utils/functions/pipe.ts:68](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/pipe.ts#L68)
