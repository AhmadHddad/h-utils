[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / SemverLite

# Class: SemverLite

## Description

Class Definition: SemverLite is defined to handle version strings.
This is just a very lite semver implementation, if you need the actual thing you can check https://www.npmjs.com/package/semver

## Constructors

### new SemverLite()

> **new SemverLite**(): [`SemverLite`](SemverLite.md)

#### Returns

[`SemverLite`](SemverLite.md)

## Properties

### versionRegex

> `static` `private` `readonly` **versionRegex**: `RegExp`

#### Source

[src/classes/SemverLite.ts:8](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L8)

## Methods

### coerce()

> `static` **coerce**(`version`): `string`

#### Parameters

• **version**: `string`

#### Returns

`string`

#### Description

Extracts the numeric version part from a string.

#### Source

[src/classes/SemverLite.ts:38](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L38)

***

### greaterThan()

> `static` **greaterThan**(`version1`, `version2`): `boolean`

#### Parameters

• **version1**: `string`

• **version2**: `string`

#### Returns

`boolean`

#### Description

Compares two versions and returns true if version1 is greater than version2.

#### Source

[src/classes/SemverLite.ts:13](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L13)

***

### isValid()

> `static` **isValid**(`version`): `boolean`

#### Parameters

• **version**: `string`

#### Returns

`boolean`

#### Description

Checks if a version string is valid.

#### Source

[src/classes/SemverLite.ts:31](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L31)

***

### lessThan()

> `static` **lessThan**(`version1`, `version2`): `boolean`

#### Parameters

• **version1**: `string`

• **version2**: `string`

#### Returns

`boolean`

#### Description

Compares two versions and returns true if version1 is less than version2.

#### Source

[src/classes/SemverLite.ts:22](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L22)

***

### minVersion()

> `static` **minVersion**(`versions`): `string`

#### Parameters

• **versions**: `string`[]

#### Returns

`string`

#### Description

Returns the smallest version from an array of versions.

#### Source

[src/classes/SemverLite.ts:46](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L46)

***

### parse()

> `static` **parse**(`version`): `number`

#### Parameters

• **version**: `string`

#### Returns

`number`

#### Description

Converts a version string into a comparable numeric value.

#### Source

[src/classes/SemverLite.ts:55](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/classes/SemverLite.ts#L55)
