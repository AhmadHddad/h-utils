/**
 * @description Will return the length of the passed param wether if it was obj, array or a string.
 * @example count([1,2,3]) => 3
 * @example count("js") => 2
 * @example count("  ", {trimString:true}) => 0
 * @example count("  ", {trimString:false}) => 2
 * @example count({a:1,b:2}) => 2
 * @example count(true) => 1
 * @example count(false) => 0
 * @example count({a:1,b:2}) => 2
 */
export default function count(
    input?: {} | [] | string | number | boolean,
    options?: { trimString: boolean }
  ): number {
    if (!input) return 0;
  
    if (Array.isArray(input)) {
      return input.length;
    }
  
    if (typeof input === 'object') {
      return Object.keys(input).length;
    }
  
    if (typeof input === 'string') {
      if (options?.trimString) input = input.trim();
      return (input as string).length;
    }
  
    if (typeof input === 'number') return input;
  
    if (typeof input === 'boolean') return input ? 1 : 0;
  
    return 0;
  }