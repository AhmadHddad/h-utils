[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / intersectionObserver

# Function: intersectionObserver()

> **intersectionObserver**(`elementOrElements`, `callback`, `options`, `fallbackInView`): () => `void`

Defined in: [src/utils/browser/intersectionObserver.ts:147](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/intersectionObserver.ts#L147)

## Parameters

### elementOrElements

DOM Element or Elements to observe

`Element` | `Element`[]

### callback

[`ObserverInstanceCallback`](../type-aliases/ObserverInstanceCallback.md)

Callback function to trigger when intersection status changes

### options

`IntersectionObserverInit` = `...`

Intersection Observer options

### fallbackInView

`boolean` = `unsupportedValue`

Fallback inView value.

## Returns

Function - Cleanup function that should be triggered to unregister the observer

> (): `void`

### Returns

`void`

## Example

```ts
will start observing the element if its on the view port
`

const observer = observeFunc(
document.body,
(isInView, entry) => {
// do something
},
// document or any HTML element of choice
{ root: document }
);

// When called it will unobserve the element (for cleanup).
observer();
`
```
