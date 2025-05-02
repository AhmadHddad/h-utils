[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / pipeWith

# Function: pipeWith()

## Call Signature

> **pipeWith**\<`A`, `B`\>(`a`, `ab`): `B`

Defined in: [src/utils/functions/pipeWith.ts:13](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L13)

### Type Parameters

#### A

`A`

#### B

`B`

### Parameters

#### a

`A`

#### ab

(`this`, `a`) => `B`

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

## Call Signature

> **pipeWith**\<`A`, `B`, `C`\>(`a`, `ab`, `bc`): `C`

Defined in: [src/utils/functions/pipeWith.ts:14](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L14)

### Type Parameters

#### A

`A`

#### B

`B`

#### C

`C`

### Parameters

#### a

`A`

#### ab

(`this`, `a`) => `B`

#### bc

(`this`, `b`) => `C`

### Returns

`C`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`\>(`a`, `ab`, `bc`, `cd`): `D`

Defined in: [src/utils/functions/pipeWith.ts:19](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L19)

### Type Parameters

#### A

`A`

#### B

`B`

#### C

`C`

#### D

`D`

### Parameters

#### a

`A`

#### ab

(`this`, `a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

### Returns

`D`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`\>(`a`, `ab`, `bc`, `cd`, `de`): `E`

Defined in: [src/utils/functions/pipeWith.ts:25](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L25)

### Type Parameters

#### A

`A`

#### B

`B`

#### C

`C`

#### D

`D`

#### E

`E`

### Parameters

#### a

`A`

#### ab

(`this`, `a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

### Returns

`E`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`): `F`

Defined in: [src/utils/functions/pipeWith.ts:32](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L32)

### Type Parameters

#### A

`A`

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

#### a

`A`

#### ab

(`this`, `a`) => `B`

#### bc

(`this`, `b`) => `C`

#### cd

(`this`, `c`) => `D`

#### de

(`this`, `d`) => `E`

#### ef

(`this`, `e`) => `F`

### Returns

`F`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`): `G`

Defined in: [src/utils/functions/pipeWith.ts:40](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L40)

### Type Parameters

#### A

`A`

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

#### a

`A`

#### ab

(`this`, `a`) => `B`

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

`G`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): `H`

Defined in: [src/utils/functions/pipeWith.ts:49](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L49)

### Type Parameters

#### A

`A`

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

#### a

`A`

#### ab

(`this`, `a`) => `B`

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

`H`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): `I`

Defined in: [src/utils/functions/pipeWith.ts:59](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L59)

### Type Parameters

#### A

`A`

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

#### a

`A`

#### ab

(`this`, `a`) => `B`

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

`I`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```

## Call Signature

> **pipeWith**\<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`a`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): `J`

Defined in: [src/utils/functions/pipeWith.ts:70](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/functions/pipeWith.ts#L70)

### Type Parameters

#### A

`A`

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

#### a

`A`

#### ab

(`this`, `a`) => `B`

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

`J`

### Description

Transform a value by piping it through the listed functions. Sugar syntax for pipe(f, g)(value).

### Example

```ts
const add1 = (n: number) => n + 1;
const times2 = (n: number) => n * 2;

const result: number = pipeWith(1, add1, times2) // 4;
```
