/**
 *
 * @description will return the globalThis according to the runtime environment
 */
export default function getGlobalThis(): (typeof globalThis){
  /** Detect free variable `global` from Node.js. */
  const freeGlobal =
    typeof global === 'object' &&
    global !== null &&
    global.Object === Object &&
    global;

  /** Detect free variable `globalThis` */
  const freeGlobalThis =
    typeof globalThis === 'object' &&
    globalThis !== null &&
    globalThis.Object == Object &&
    globalThis;

  /** Detect free variable `self`. */
  const freeSelf =
    typeof self === 'object' && self !== null && self.Object === Object && self;

  return freeGlobalThis || freeGlobal || freeSelf || Function('return this')();
}
