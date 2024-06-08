[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / NetworkHttpRequestMonitorOptions

# Type alias: NetworkHttpRequestMonitorOptions

> **NetworkHttpRequestMonitorOptions**: `object`

## Type declaration

### cancelAfterIdle?

> `optional` **cancelAfterIdle**: `boolean`

#### Description

will cancel the onRequestsIdle on first idle call.

#### Default

```ts
true
```

### intervalMs?

> `optional` **intervalMs**: `number`

#### Description

check cycle time in ms

#### Default

```ts
1000
```

### triggerOnWindowLoad?

> `optional` **triggerOnWindowLoad**: `boolean`

#### Description

trigger the check when the window is loaded.

#### Default

```ts
true
```

## Source

[src/utils/types.ts:513](https://github.com/AhmadHddad/h-utils/blob/5c76ff5de068cee019fc632d9da2e395721bb48f/src/utils/types.ts#L513)
