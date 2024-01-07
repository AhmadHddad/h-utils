
/**
 * @description will generate a random integer
 * @param rightBound @default 1000_000_000
 * @example generateRandomInt() // 831723204
 */
export default function generateRandomInt(rightBound: number = 1000_000_000): number {
  return Math.floor(Math.random() * rightBound);
}