import has from "../object/has";

/**
 * @description checks if the passed key in the object.
 * @deprecated use has instead.
 */
export default function isKeyInObject(
  objectType: {} | Function | [],
  key: string
): boolean {
  return has(objectType, key);
}
