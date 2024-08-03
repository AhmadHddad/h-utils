import { Falsy } from '../types';

/**
 * Tests for Falsy by simply applying negation `!` to the tested `val`.
 *
 * The value is mostly in added type-information and explicity,
 * but in case of this simple type much the same can often be archived by just using negation `!`:
 * @example isFalsy("") // true
 */
const isFalsy = (val: unknown): val is Falsy => !val;

export default isFalsy;
