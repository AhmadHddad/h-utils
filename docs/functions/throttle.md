[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / throttle

# Function: throttle()

> **throttle**\<`T`\>(`func`, `wait?`, `options?`): () => `void` \| \{(...`args`): `any`; `cancel`: () => `void`; `flush`: () => `any`; `pending`: () => `boolean`; \}

Defined in: [src/utils/functions/throttle.ts:52](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/functions/throttle.ts#L52)

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

## Type Parameters

### T

`T` = `any`

## Parameters

### func

(...`args`) => `T`

The function to throttle.

### wait?

`number` = `200`

The number of milliseconds to throttle invocations to; if omitted,
 `requestAnimationFrame` is used (if available).

### options?

The options object.

#### leading

`boolean`

Specify invoking on the leading edge of the timeout.

#### trailing

`boolean`

Specify invoking on the trailing edge of the timeout.

## Returns

() => `void` \| \{(...`args`): `any`; `cancel`: () => `void`; `flush`: () => `any`; `pending`: () => `boolean`; \}

Returns the new throttled function.

## Since

0.1.0

## Example

```ts
* // Avoid excessively updating the position while scrolling.
 * const throttled = throttle(() => {
 *   console.log('Scroll event handler');
 * }, 100);
 * window.addEventListener('scroll', throttled);
 * // Later, you can cancel the throttled function
 * throttled.cancel();
 * // Or flush the last invocation
 * throttled.flush();
```
