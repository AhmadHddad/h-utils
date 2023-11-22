import { Point2D, Point3D, PointObject } from "../types";

function isPointObject(point: any): point is PointObject {
  return (
    typeof point === 'object' && point !== null && 'x' in point && 'y' in point
  );
}

function isPoint2DArray(point: any): point is Point2D {
  return Array.isArray(point) && point.length === 2;
}

function isPoint3DArray(point: any): point is Point3D {
  return Array.isArray(point) && (point.length === 2 || point.length === 3);
}

/**
 * @description Finds the Euclidean distance between two 2D or 3D points, accepting input in object or array format. It includes runtime type-checking and throws an error for invalid inputs. The result is the Euclidean distance.
 * @example
 * const pointObjA = { x: 1, y: 2};
 * const pointObjB = { x: 4, y: 5 };
 * calculateDistance(pointObjA, pointObjB) //4.242640687119285
 * 
 * const pointArrA = [1, 2, 3];
 * const pointArrB = [4, 5, 6];
 * calculateDistance(pointArrA, pointArrB) //5.196152422706632
 * 
 */
export default function calculateDistance(
  pointA: Point2D | Point3D | PointObject,
  pointB: Point2D | Point3D | PointObject
): number {
  let x1 = 0,
    y1 = 0,
    z1 = 0,
    x2 = 0,
    y2 = 0,
    z2 = 0;

  if (isPointObject(pointA)) {
    x1 = pointA.x;
    y1 = pointA.y;
    if (typeof pointA.z === 'number') z1 = pointA.z;
  } else if (isPoint2DArray(pointA)) {
    x1 = pointA[0];
    y1 = pointA[1];
  } else if (isPoint3DArray(pointA)) {
    x1 = pointA[0];
    y1 = pointA[1];
    z1 = pointA[2];
  } else {
    throw new Error(
      'Invalid format for pointA. Should be an object {x, y} or an array [x, y].'
    );
  }

  if (isPointObject(pointB)) {
    x2 = pointB.x;
    y2 = pointB.y;
    if (typeof pointB.z === 'number') z2 = pointB.z;
  } else if (isPoint2DArray(pointB)) {
    x2 = pointB[0];
    y2 = pointB[1];
  } else if (isPoint3DArray(pointB)) {
    x2 = pointB[0];
    y2 = pointB[1];
    z2 = pointB[2];
  } else {
    throw new Error(
      'Invalid format for pointB. Should be an object {x, y} or an array [x, y].'
    );
  }

  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = (z2 || 0) - (z1 || 0); // Consider 0 if z is not present

  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
