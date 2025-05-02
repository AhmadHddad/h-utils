[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / NetworkHttpRequestMonitorOptions

# Type Alias: NetworkHttpRequestMonitorOptions

> **NetworkHttpRequestMonitorOptions** = `object`

Defined in: [src/utils/types.ts:513](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L513)

## Properties

### cancelAfterIdle?

> `optional` **cancelAfterIdle**: `boolean`

Defined in: [src/utils/types.ts:528](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L528)

#### Description

will cancel the onRequestsIdle on first idle call.

#### Default

```ts
true
```

***

### intervalMs?

> `optional` **intervalMs**: `number`

Defined in: [src/utils/types.ts:518](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L518)

#### Description

check cycle time in ms

#### Default

```ts
1000
```

***

### triggerOnWindowLoad?

> `optional` **triggerOnWindowLoad**: `boolean`

Defined in: [src/utils/types.ts:523](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/types.ts#L523)

#### Description

trigger the check when the window is loaded.

#### Default

```ts
true
```
