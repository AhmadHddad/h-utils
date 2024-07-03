[**hd-utils**](../README.md) • **Docs**

***

[hd-utils](../globals.md) / calculateDistance

# Function: calculateDistance()

> **calculateDistance**(`pointA`, `pointB`): `number`

## Parameters

• **pointA**: [`PointObject`](../interfaces/PointObject.md) \| [`Point2D`](../type-aliases/Point2D.md) \| [`Point3D`](../type-aliases/Point3D.md)

• **pointB**: [`PointObject`](../interfaces/PointObject.md) \| [`Point2D`](../type-aliases/Point2D.md) \| [`Point3D`](../type-aliases/Point3D.md)

## Returns

`number`

## Description

Finds the Euclidean distance between two 2D or 3D points, accepting input in object or array format. It includes runtime type-checking and throws an error for invalid inputs. The result is the Euclidean distance.

## Example

```ts
const pointObjA = { x: 1, y: 2};
const pointObjB = { x: 4, y: 5 };
calculateDistance(pointObjA, pointObjB) //4.242640687119285

const pointArrA = [1, 2, 3];
const pointArrB = [4, 5, 6];
calculateDistance(pointArrA, pointArrB) //5.196152422706632
```

## Source

[src/utils/general/calculateDistance.ts:29](https://github.com/AhmadHddad/h-utils/blob/b1dfa95e218c9605f39fc234662ef50e62fadcb8/src/utils/general/calculateDistance.ts#L29)
