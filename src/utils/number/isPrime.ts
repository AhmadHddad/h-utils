/**
 * @description will check if the passed number is prime or not;
 * @example isPrime(1) // false
 */
export default function isPrime(num: number): boolean {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
