[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / pipe

# Function: pipe()

## Call Signature

> **pipe**\<`A`, `B`\>(`ab`): (...`args`) => `B`

Defined in: [src/utils/functions/pipe.ts:16](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L16)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

### Parameters

#### ab

(`this`, ...`a`) => `B`

### Returns

> (...`args`): `B`

#### Parameters

##### args

...`A`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`\>(`ab`, `bc`): (...`args`) => `C`

Defined in: [src/utils/functions/pipe.ts:19](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L19)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

### Returns

> (...`args`): `C`

#### Parameters

##### args

...`A`

#### Returns

`C`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`\>(`ab`, `bc`, `cd`): (...`args`) => `D`

Defined in: [src/utils/functions/pipe.ts:23](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L23)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

### Returns

> (...`args`): `D`

#### Parameters

##### args

...`A`

#### Returns

`D`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`, `E`\>(`ab`, `bc`, `cd`, `de`): (...`args`) => `E`

Defined in: [src/utils/functions/pipe.ts:28](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L28)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

### Returns

> (...`args`): `E`

#### Parameters

##### args

...`A`

#### Returns

`E`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`\>(`ab`, `bc`, `cd`, `de`, `ef`): (...`args`) => `F`

Defined in: [src/utils/functions/pipe.ts:34](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L34)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

#### F

`F`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

#### ef

(`this`, `e`) => `F`

### Returns

> (...`args`): `F`

#### Parameters

##### args

...`A`

#### Returns

`F`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`): (...`args`) => `G`

Defined in: [src/utils/functions/pipe.ts:41](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L41)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

#### F

`F`

#### G

`G`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

#### ef

(`this`, `e`) => `F`

#### fg

(`this`, `f`) => `G`

### Returns

> (...`args`): `G`

#### Parameters

##### args

...`A`

#### Returns

`G`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): (...`args`) => `H`

Defined in: [src/utils/functions/pipe.ts:49](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L49)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

#### F

`F`

#### G

`G`

#### H

`H`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

#### ef

(`this`, `e`) => `F`

#### fg

(`this`, `f`) => `G`

#### gh

(`this`, `g`) => `H`

### Returns

> (...`args`): `H`

#### Parameters

##### args

...`A`

#### Returns

`H`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): (...`args`) => `I`

Defined in: [src/utils/functions/pipe.ts:58](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L58)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

#### F

`F`

#### G

`G`

#### H

`H`

#### I

`I`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

#### ef

(`this`, `e`) => `F`

#### fg

(`this`, `f`) => `G`

#### gh

(`this`, `g`) => `H`

#### hi

(`this`, `h`) => `I`

### Returns

> (...`args`): `I`

#### Parameters

##### args

...`A`

#### Returns

`I`

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

## Call Signature

> **pipe**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): (...`args`) => `J`

Defined in: [src/utils/functions/pipe.ts:68](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/pipe.ts#L68)

### Type Parameters

#### A

`A` *extends* `unknown`[]

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

#### F

`F`

#### G

`G`

#### H

`H`

#### I

`I`

#### J

`J`

### Parameters

#### ab

(`this`, ...`a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

#### ef

(`this`, `e`) => `F`

#### fg

(`this`, `f`) => `G`

#### gh

(`this`, `g`) => `H`

#### hi

(`this`, `h`) => `I`

#### ij

(`this`, `i`) => `J`

### Returns

> (...`args`): `J`

#### Parameters

##### args

...`A`

#### Returns

`J`

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
