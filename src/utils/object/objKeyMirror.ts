/**
 * @description function returns an object with keys as the same keys and values as the stringified keys.
 * @example objKeyMirror({ a: 1, b: 2 }); //{ a: "a", b: "b" }
 */
export default function objKeyMirror<T extends Record<string, any>>(
  obj: T
): { [K in keyof T]: K } {
  return Object.keys(obj).reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: curr,
    }),
    {} as { [K in keyof T]: K }
  );
}
