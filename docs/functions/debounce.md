[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / debounce

# Function: debounce()

> **debounce**\<`T`\>(`func`, `wait`?, `options`?): (...`args`) => `any`

Creates a debounced function that delays invoking `func` until after `wait`
milliseconds have elapsed since the last time the debounced function was
invoked, or until the next browser frame is drawn. The debounced function
comes with a `cancel` method to cancel delayed `func` invocations and a
`flush` method to immediately invoke them. Provide `options` to indicate
whether `func` should be invoked on the leading and/or trailing edge of the
`wait` timeout. The `func` is invoked with the last arguments provided to the
debounced function. Subsequent calls to the debounced function return the
result of the last `func` invocation.

**Note:** If `leading` and `trailing` options are `true`, `func` is
invoked on the trailing edge of the timeout only if the debounced function
is invoked more than once during the `wait` timeout.

If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
until the next tick, similar to `setTimeout` with a timeout of `0`.

If `wait` is omitted in an environment with `requestAnimationFrame`, `func`
invocation will be deferred until the next frame is drawn (typically about
16ms).

See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
for details over the differences between `debounce` and `throttle`.

## Type parameters

• **T** = `any`

## Parameters

• **func**

The function to debounce.

• **wait?**: `number`= `200`

The number of milliseconds to delay; if omitted, `requestAnimationFrame` is
 used (if available).

• **options?**: [`DebounceOptions`](../type-aliases/DebounceOptions.md)

The options object.

## Returns

`Function`

Returns the new debounced function.

### Parameters

• ...**args**: `any`[]

### Returns

`any`

### cancel()

> **cancel**: () => `void`

#### Returns

`void`

### flush()

> **flush**: () => `any`

#### Returns

`any`

### pending()

> **pending**: () => `boolean`

#### Returns

`boolean`

## Since

0.1.0

## Example

```ts
// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', debounce(calculateLayout, 150))

// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}))

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })
const source = new EventSource('/stream')
jQuery(source).on('message', debounced)

// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel)

// Check for pending invocations.
const status = debounced.pending() ? "Pending..." : "Ready"
```

## Source

[src/utils/functions/debounce.ts:68](https://github.com/AhmadHddad/h-utils/blob/8e9e542f98b1a43a336ce585dc8666b21b0e894d/src/utils/functions/debounce.ts#L68)
