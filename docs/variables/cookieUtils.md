[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / cookieUtils

# Variable: cookieUtils

> `const` **cookieUtils**: `object`

Defined in: [src/utils/browser/cookieUtils.ts:23](https://github.com/AhmadHddad/h-utils/blob/edfe90a63f57093e3cfee3445e14096881d5f4a0/src/utils/browser/cookieUtils.ts#L23)

## Type declaration

### deleteCookie()

> **deleteCookie**: (`name`) => `void`

#### Parameters

##### name

`string`

#### Returns

`void`

### findCookieByName()

> **findCookieByName**: (`name`) => [`Cookie`](../interfaces/Cookie.md)

#### Parameters

##### name

`string`

#### Returns

[`Cookie`](../interfaces/Cookie.md)

### getCookies()

> **getCookies**: () => [`Cookie`](../interfaces/Cookie.md)[]

#### Returns

[`Cookie`](../interfaces/Cookie.md)[]

### parseCookie()

> **parseCookie**: (`cookieString`) => [`Cookie`](../interfaces/Cookie.md)

#### Parameters

##### cookieString

`string`

#### Returns

[`Cookie`](../interfaces/Cookie.md)

### setCookie()

> **setCookie**: (`name`, `value`, `days?`, `path?`, `domain?`, `httpOnly?`, `secure?`) => `void`

#### Parameters

##### name

`string`

##### value

`string`

##### days?

`number`

##### path?

`string`

##### domain?

`string`

##### httpOnly?

`boolean`

##### secure?

`boolean`

#### Returns

`void`

### cookie

#### Get Signature

> **get** **cookie**(): `string`

##### Returns

`string`

## Description

-- Browses only --
In this cookieUtils object:

findCookieByName: Searches for a cookie by name and returns its parsed value.
getCookies: Retrieves all cookies and returns them as an array of parsed objects.
setCookie: Creates or updates a cookie with the specified name, value, and expiration in days. It uses encodeURIComponent for encoding the cookie value.
parseCookie: Splits a cookie string into its name and value and decodes the value.
deleteCookie: Deletes a cookie by setting its expiration date to a past date.

## Example

```ts
cookieUtils.setCookie('test', '123', 7);
console.log(cookieUtils.findCookieByName('test'));
console.log(cookieUtils.getCookies());
cookieUtils.deleteCookie('test');
```
