[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / intersectionObserver

# Function: intersectionObserver()

> **intersectionObserver**(`elementOrElements`, `callback`, `options`?, `fallbackInView`?): () => `void`

## Parameters

• **elementOrElements**: `Element` \| `Element`[]

DOM Element or Elements to observe

• **callback**: `ObserverInstanceCallback`

Callback function to trigger when intersection status changes

• **options?**: `IntersectionObserverInit`

Intersection Observer options

• **fallbackInView?**: `boolean`

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

node\_modules/hd-intersection-observer/dist/index.d.ts:43
