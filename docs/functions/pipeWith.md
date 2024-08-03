[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / pipeWith

# Function: pipeWith()

## pipeWith(a, ab)

> **pipeWith**\<`A`, `B`\>(`a`, `ab`): `B`

### Type parameters

• **A**

• **B**

### Parameters

• **a**: `A`

• **ab**

### Returns

`B`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

### Source

[src/utils/functions/pipeWith.ts:13](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L13)

## pipeWith(a, ab, bc)

> **pipeWith**\<`A`, `B`, `C`\>(`a`, `ab`, `bc`): `C`

### Type parameters

• **A**

• **B**

• **C**

### Parameters

• **a**: `A`

• **ab**

• **bc**

### Returns

`C`

### Source

[src/utils/functions/pipeWith.ts:14](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L14)

## pipeWith(a, ab, bc, cd)

> **pipeWith**\<`A`, `B`, `C`, `D`\>(`a`, `ab`, `bc`, `cd`): `D`

### Type parameters

• **A**

• **B**

• **C**

• **D**

### Parameters

• **a**: `A`

• **ab**

• **bc**

• **cd**

### Returns

`D`

### Source

[src/utils/functions/pipeWith.ts:19](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L19)

## pipeWith(a, ab, bc, cd, de)

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`\>(`a`, `ab`, `bc`, `cd`, `de`): `E`

### Type parameters

• **A**

• **B**

• **C**

• **D**

• **E**

### Parameters

• **a**: `A`

• **ab**

• **bc**

• **cd**

• **de**

### Returns

`E`

### Source

[src/utils/functions/pipeWith.ts:25](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L25)

## pipeWith(a, ab, bc, cd, de, ef)

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`): `F`

### Type parameters

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

### Parameters

• **a**: `A`

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

### Returns

`F`

### Source

[src/utils/functions/pipeWith.ts:32](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L32)

## pipeWith(a, ab, bc, cd, de, ef, fg)

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`): `G`

### Type parameters

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

### Parameters

• **a**: `A`

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

### Returns

`G`

### Source

[src/utils/functions/pipeWith.ts:40](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L40)

## pipeWith(a, ab, bc, cd, de, ef, fg, gh)

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): `H`

### Type parameters

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

### Parameters

• **a**: `A`

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

• **gh**

### Returns

`H`

### Source

[src/utils/functions/pipeWith.ts:49](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L49)

## pipeWith(a, ab, bc, cd, de, ef, fg, gh, hi)

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): `I`

### Type parameters

• **A**

• **B**

• **C**

• **D**

• **E**

• **F**

• **G**

• **H**

• **I**

### Parameters

• **a**: `A`

• **ab**

• **bc**

• **cd**

• **de**

• **ef**

• **fg**

• **gh**

• **hi**

### Returns

`I`

### Source

[src/utils/functions/pipeWith.ts:59](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L59)

## pipeWith(a, ab, bc, cd, de, ef, fg, gh, hi, ij)

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): `J`

### Type parameters

• **A**

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

• **a**: `A`

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

`J`

### Source

[src/utils/functions/pipeWith.ts:70](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/functions/pipeWith.ts#L70)
