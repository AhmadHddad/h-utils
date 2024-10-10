[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / StepDeque

# Class: StepDeque\<T\>

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

## Type parameters

• **T**

## Constructors

### new StepDeque()

> **new StepDeque**\<`T`\>(`steps`, `options`?): [`StepDeque`](StepDeque.md)\<`T`\>

#### Parameters

• **steps**: `Step`\<`T`\>[]

• **options?**: `Partial`\<`object`\>

#### Returns

[`StepDeque`](StepDeque.md)\<`T`\>

#### Source

[src/classes/StepDeque.ts:22](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L22)

## Properties

### currentIndex

> `private` **currentIndex**: `number`

#### Source

[src/classes/StepDeque.ts:19](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L19)

***

### defaultStepIndex

> `private` **defaultStepIndex**: `number`

#### Source

[src/classes/StepDeque.ts:18](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L18)

***

### isCircular

> `private` **isCircular**: `boolean`

#### Source

[src/classes/StepDeque.ts:20](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L20)

***

### steps

> `private` **steps**: `Step`\<`T`\>[]

#### Source

[src/classes/StepDeque.ts:17](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L17)

## Methods

### addAt()

> **addAt**(`step`, `index`): `void`

Adds a new step at a specific index.

#### Parameters

• **step**: `T`

The step to add.

• **index**: `number`

The index at which to add the step.

#### Returns

`void`

#### Throws

If the index is out of bounds.

#### Source

[src/classes/StepDeque.ts:122](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L122)

***

### addFirst()

> **addFirst**(`step`): `void`

Adds a new step at the beginning.

#### Parameters

• **step**: `T`

The step to add.

#### Returns

`void`

#### Source

[src/classes/StepDeque.ts:100](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L100)

***

### addLast()

> **addLast**(`step`): `void`

Adds a new step at the end.

#### Parameters

• **step**: `T`

The step to add.

#### Returns

`void`

#### Source

[src/classes/StepDeque.ts:112](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L112)

***

### current()

> **current**(...`args`): `undefined` \| `T`

Returns the value of the current step without changing the current index.

#### Parameters

• ...**args**: `any`[]

#### Returns

`undefined` \| `T`

#### Source

[src/classes/StepDeque.ts:78](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L78)

***

### getCurrentStepIndex()

> **getCurrentStepIndex**(): `number`

#### Returns

`number`

#### Source

[src/classes/StepDeque.ts:29](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L29)

***

### getSteps()

> **getSteps**(): `Step`\<`T`\>[]

#### Returns

`Step`\<`T`\>[]

#### Source

[src/classes/StepDeque.ts:33](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L33)

***

### next()

> **next**(...`args`): `undefined` \| `T`

Moves to the next step and returns its value.
If there are no more steps, it returns undefined.

#### Parameters

• ...**args**: `any`[]

#### Returns

`undefined` \| `T`

#### Source

[src/classes/StepDeque.ts:41](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L41)

***

### previous()

> **previous**(...`args`): `undefined` \| `T`

Moves to the previous step and returns its value.
If already at the first step, it returns undefined.

#### Parameters

• ...**args**: `any`[]

#### Returns

`undefined` \| `T`

#### Source

[src/classes/StepDeque.ts:60](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L60)

***

### removeAt()

> **removeAt**(`index`): `void`

Removes the step at a specific index.

#### Parameters

• **index**: `number`

The index of the step to remove.

#### Returns

`void`

#### Throws

If the index is out of bounds.

#### Source

[src/classes/StepDeque.ts:172](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L172)

***

### removeFirst()

> **removeFirst**(): `void`

Removes the first step.

#### Returns

`void`

#### Throws

If there are no steps.

#### Source

[src/classes/StepDeque.ts:146](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L146)

***

### removeLast()

> **removeLast**(): `void`

Removes the last step.

#### Returns

`void`

#### Throws

If there are no steps.

#### Source

[src/classes/StepDeque.ts:160](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L160)

***

### reset()

> **reset**(): `void`

Resets the stepper to the initial step.

#### Returns

`void`

#### Source

[src/classes/StepDeque.ts:92](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L92)

***

### setSteps()

> **setSteps**(`steps`): `void`

Sets a new set of steps and resets the stepper.

#### Parameters

• **steps**: `Step`\<`T`\>[]

An array of step functions.

#### Returns

`void`

#### Source

[src/classes/StepDeque.ts:137](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/classes/StepDeque.ts#L137)
