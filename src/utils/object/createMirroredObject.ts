export type TransformCallback = <K extends string>(
  key: K,
  value: K
) => [string, string];

/**
 * @description function returns an object with keys as the same keys and values as the stringified keys.
 * @example createMirroredObject(["a", "b"]); //{ a: "a", b: "b" }
 * @example createMirroredObject(["a", "b"], (key, value) => [key.toUpperCase(), value]); // { A: "a", B: "b" }
 */
export default function createMirroredObject<T extends string[]>(
  keysArray: [...T],
  transformCallback: TransformCallback = (key, value) => [key, value]
): { [K in T[number]]: string } {
  return keysArray.reduce((acc, key) => {
    const [newKey, newValue] = transformCallback(key, key);
    acc[newKey as T[number]] = newValue;
    return acc;
  }, {} as { [K in T[number]]: string });
}
