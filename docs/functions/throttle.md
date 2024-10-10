[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `wait`?, `options`?): () => `void` \| (...`args`) => `any`

Creates a throttled function that only invokes `func` at most once per
every `wait` milliseconds (or once per browser frame). The throttled function
comes with a `cancel` method to cancel delayed `func` invocations and a
`flush` method to immediately invoke them. Provide `options` to indicate
whether `func` should be invoked on the leading and/or trailing edge of the
`wait` timeout. The `func` is invoked with the last arguments provided to the
throttled function. Subsequent calls to the throttled function return the
result of the last `func` invocation.

**Note:** If `leading` and `trailing` options are `true`, `func` is
invoked on the trailing edge of the timeout only if the throttled function
is invoked more than once during the `wait` timeout.

If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
until the next tick, similar to `setTimeout` with a timeout of `0`.

If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
invocation will be deferred until the next frame is drawn (typically about
16ms).

See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
for details over the differences between `throttle` and `debounce`.

## Type parameters

• **T** = `any`

## Parameters

• **func**

The function to throttle.

• **wait?**: `number`= `200`

The number of milliseconds to throttle invocations to; if omitted,
 `requestAnimationFrame` is used (if available).

• **options?**

The options object.

• **options.leading?**: `boolean`

Specify invoking on the leading edge of the timeout.

• **options.trailing?**: `boolean`

Specify invoking on the trailing edge of the timeout.

## Returns

() => `void` \| (...`args`) => `any`

Returns the new throttled function.

## Since

0.1.0

## Example

```ts
// Avoid excessively updating the position while scrolling.
jQuery(window).on('scroll', throttle(updatePosition, 100))

 Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
const throttled = throttle(renewToken, 300000, { 'trailing': false })
jQuery(element).on('click', throttled)

// Cancel the trailing throttled invocation.
jQuery(window).on('popstate', throttled.cancel)
```

## Source

[src/utils/functions/throttle.ts:52](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/throttle.ts#L52)
