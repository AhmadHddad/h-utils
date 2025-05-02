[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / onUrlChange

# Function: onUrlChange()

> **onUrlChange**(`onPush?`, `onPop?`): () => `void`

Defined in: [src/utils/browser/onUrlChange.ts:9](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/utils/browser/onUrlChange.ts#L9)

**`Function`**

onUrlChange

## Parameters

### onPush?

(`data`, `unused`, `url?`) => `void`

### onPop?

(`popstate`) => `void`

## Returns

> (): `void`

### Returns

`void`

## Description

-- For Browsers --
 a function that takes callback that will be called whenever the url is changed (ideal for SPA)
