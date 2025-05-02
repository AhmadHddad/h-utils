[**hd-utils**](../README.md)

***

[hd-utils](../globals.md) / SemverLite

# Class: SemverLite

Defined in: [src/classes/SemverLite.ts:7](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L7)

## Description

Class Definition: SemverLite is defined to handle version strings.
This is just a very lite semver implementation, if you need the actual thing you can check https://www.npmjs.com/package/semver

## Constructors

### Constructor

> **new SemverLite**(): `SemverLite`

#### Returns

`SemverLite`

## Methods

### coerce()

> `static` **coerce**(`version`): `string`

Defined in: [src/classes/SemverLite.ts:38](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L38)

#### Parameters

##### version

`string`

#### Returns

`string`

#### Description

Extracts the numeric version part from a string.

***

### greaterThan()

> `static` **greaterThan**(`version1`, `version2`): `boolean`

Defined in: [src/classes/SemverLite.ts:13](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L13)

#### Parameters

##### version1

`string`

##### version2

`string`

#### Returns

`boolean`

#### Description

Compares two versions and returns true if version1 is greater than version2.

***

### isValid()

> `static` **isValid**(`version`): `boolean`

Defined in: [src/classes/SemverLite.ts:31](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L31)

#### Parameters

##### version

`string`

#### Returns

`boolean`

#### Description

Checks if a version string is valid.

***

### lessThan()

> `static` **lessThan**(`version1`, `version2`): `boolean`

Defined in: [src/classes/SemverLite.ts:22](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L22)

#### Parameters

##### version1

`string`

##### version2

`string`

#### Returns

`boolean`

#### Description

Compares two versions and returns true if version1 is less than version2.

***

### minVersion()

> `static` **minVersion**(`versions`): `string`

Defined in: [src/classes/SemverLite.ts:46](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L46)

#### Parameters

##### versions

`string`[]

#### Returns

`string`

#### Description

Returns the smallest version from an array of versions.

***

### parse()

> `static` **parse**(`version`): `number`

Defined in: [src/classes/SemverLite.ts:55](https://github.com/AhmadHddad/h-utils/blob/d7e1cbc62477b2f7933034cac20924d3e456d736/src/classes/SemverLite.ts#L55)

#### Parameters

##### version

`string`

#### Returns

`number`

#### Description

Converts a version string into a comparable numeric value.
