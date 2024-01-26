import camelCaseToKebab from '../string/camelCaseToKebab';
import isObject from '../validation/isObject';

type CssObj = Record<any, any>;

/**
 * @description will convert any css style object into string.
 * @example cssPropertiesToString({backgroundColor:"blue"}) // background-color:blue;
 */
export default function cssPropertiesToString(sx?: Partial<CssObj>): string {
  if (!sx) return '';

  const convertNestedObjectToString = (nestedSx: Partial<CssObj>): string => {
    return Object.entries(nestedSx)
      .map(([nestedKey, nestedValue]) => {
        return `${camelCaseToKebab(nestedKey)}: ${nestedValue};`;
      })
      .join(' ');
  };

  return Object.entries(sx)
    .map(([key, value]) => {
      const cssKey = camelCaseToKebab(key)
      if (isObject<{}>(value)) {
        return `${cssKey} {${convertNestedObjectToString(value)}}`;
      } else {
        return `${cssKey}: ${value};`;
      }
    })
    .join(' ');
}
