[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / intersectionObserver

# Function: intersectionObserver()

> **intersectionObserver**(`elementOrElements`, `callback`, `options`, `fallbackInView`): () => `void`

## Parameters

• **elementOrElements**: `Element` \| `Element`[]

DOM Element or Elements to observe

• **callback**: [`ObserverInstanceCallback`](../type-aliases/ObserverInstanceCallback.md)

Callback function to trigger when intersection status changes

• **options**: `IntersectionObserverInit`= `undefined`

Intersection Observer options

• **fallbackInView**: `undefined` \| `boolean`= `unsupportedValue`

Fallback inView value.

## Returns

`Function`

Function - Cleanup function that should be triggered to unregister the observer

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

## Source

[src/utils/browser/intersectionObserver.ts:147](https://github.com/AhmadHddad/h-utils/blob/f7bb9ae71f981ffef49079271b9540862594b7e6/src/utils/browser/intersectionObserver.ts#L147)
