import splitOnFirst from '../string/splitOnFirst';
import {
  decode,
  keysSorter,
  parserForArrayFormat,
  parseValue, validateArrayFormatSeparator
} from './routeHelpers';


export default function parse(query, options) {
  options = {
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false,
    ...options
  };

  validateArrayFormatSeparator(options.arrayFormatSeparator);

  const formatter = parserForArrayFormat(options);

  // Create an object with no prototype
  const returnValue = Object.create(null);

  if (typeof query !== 'string') {
    return returnValue;
  }

  query = query.trim().replace(/^[?#&]/, '');

  if (!query) {
    return returnValue;
  }

  for (const parameter of query.split('&')) {
    if (parameter === '') {
      continue;
    }

    const parameter_ = options.decode
      ? parameter.replace(/\+/g, ' ')
      : parameter;

    let [key, value] = splitOnFirst(parameter_, '=');

    if (key === undefined) {
      key = parameter_;
    }

    // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    value =
      value === undefined
        ? null
        : ['comma', 'separator', 'bracket-separator'].includes(
          options.arrayFormat
        )
          ? value
          : decode(value, options);
    formatter(decode(key, options), value, returnValue);
  }

  for (const [key, value] of Object.entries(returnValue)) {
    if (typeof value === 'object' && value !== null) {
      for (const [key2, value2] of Object.entries(value)) {
        value[key2] = parseValue(value2, options);
      }
    } else {
      returnValue[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return returnValue;
  }

  // eslint-disable-next-line unicorn/no-array-reduce
  return (options.sort === true
    ? Object.keys(returnValue).sort()
    : Object.keys(returnValue).sort(options.sort)
  ).reduce((result, key) => {
    const value = returnValue[key];
    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}
