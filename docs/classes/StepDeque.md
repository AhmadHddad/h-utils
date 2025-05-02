[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / StepDeque

# Class: StepDeque\<T\>

Defined in: [src/classes/StepDeque.ts:16](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L16)

## Description

A class to manage a sequence of steps, allowing navigation and dynamic modification..
Supports adding and removing steps at the beginning, end, and specific positions.

## Example

```ts
const stepper = new StepDeque(["step1", "step2", (condition) => condition ? "step3" : "step4"]);
stepper.next(); // "step1"
stepper.next(); // "step2"
stepper.next(true); // "step3"
stepper.previous(); // "step2"
```

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new StepDeque**\<`T`\>(`steps`, `options?`): `StepDeque`\<`T`\>

Defined in: [src/classes/StepDeque.ts:22](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L22)

#### Parameters

##### steps

`Step`\<`T`\>[]

##### options?

`Partial`

#### Returns

`StepDeque`\<`T`\>

## Methods

### addAt()

> **addAt**(`step`, `index`): `void`

Defined in: [src/classes/StepDeque.ts:122](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L122)

Adds a new step at a specific index.

#### Parameters

##### step

`T`

The step to add.

##### index

`number`

The index at which to add the step.

#### Returns

`void`

#### Throws

If the index is out of bounds.

***

### addFirst()

> **addFirst**(`step`): `void`

Defined in: [src/classes/StepDeque.ts:100](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L100)

Adds a new step at the beginning.

#### Parameters

##### step

`T`

The step to add.

#### Returns

`void`

***

### addLast()

> **addLast**(`step`): `void`

Defined in: [src/classes/StepDeque.ts:112](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L112)

Adds a new step at the end.

#### Parameters

##### step

`T`

The step to add.

#### Returns

`void`

***

### current()

> **current**(...`args`): `T`

Defined in: [src/classes/StepDeque.ts:78](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L78)

Returns the value of the current step without changing the current index.

#### Parameters

##### args

...`any`[]

#### Returns

`T`

***

### getCurrentStepIndex()

> **getCurrentStepIndex**(): `number`

Defined in: [src/classes/StepDeque.ts:29](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L29)

#### Returns

`number`

***

### getSteps()

> **getSteps**(): `Step`\<`T`\>[]

Defined in: [src/classes/StepDeque.ts:33](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L33)

#### Returns

`Step`\<`T`\>[]

***

### next()

> **next**(...`args`): `T`

Defined in: [src/classes/StepDeque.ts:41](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L41)

Moves to the next step and returns its value.
If there are no more steps, it returns undefined.

#### Parameters

##### args

...`any`[]

#### Returns

`T`

***

### previous()

> **previous**(...`args`): `T`

Defined in: [src/classes/StepDeque.ts:60](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L60)

Moves to the previous step and returns its value.
If already at the first step, it returns undefined.

#### Parameters

##### args

...`any`[]

#### Returns

`T`

***

### removeAt()

> **removeAt**(`index`): `void`

Defined in: [src/classes/StepDeque.ts:172](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L172)

Removes the step at a specific index.

#### Parameters

##### index

`number`

The index of the step to remove.

#### Returns

`void`

#### Throws

If the index is out of bounds.

***

### removeFirst()

> **removeFirst**(): `void`

Defined in: [src/classes/StepDeque.ts:146](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L146)

Removes the first step.

#### Returns

`void`

#### Throws

If there are no steps.

***

### removeLast()

> **removeLast**(): `void`

Defined in: [src/classes/StepDeque.ts:160](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L160)

Removes the last step.

#### Returns

`void`

#### Throws

If there are no steps.

***

### reset()

> **reset**(): `void`

Defined in: [src/classes/StepDeque.ts:92](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L92)

Resets the stepper to the initial step.

#### Returns

`void`

***

### setSteps()

> **setSteps**(`steps`): `void`

Defined in: [src/classes/StepDeque.ts:137](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/classes/StepDeque.ts#L137)

Sets a new set of steps and resets the stepper.

#### Parameters

##### steps

`Step`\<`T`\>[]

An array of step functions.

#### Returns

`void`
