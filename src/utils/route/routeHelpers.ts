import splitOnFirst from '../string/splitOnFirst';
import isNullOrUndefined from '../validation/isNullOrUndefined';

export function parseValue(value, options) {
  if (
    options.parseNumbers &&
    !Number.isNaN(Number(value)) &&
    typeof value === 'string' &&
    value.trim() !== ''
  ) {
    value = Number(value);
  } else if (
    options.parseBooleans &&
    value !== null &&
    (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')
  ) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

export const strictUriEncode = (string) =>
  encodeURIComponent(string).replace(
    /[!'()*]/g,
    (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`
  );

export function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index': {
      return (key) => (result, value) => {
        const index = result.length;

        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === '')
        ) {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), '[', index, ']'].join('')];
        }

        return [
          ...result,
          [
            encode(key, options),
            '[',
            encode(index, options),
            ']=',
            encode(value, options),
          ].join(''),
        ];
      };
    }

    case 'bracket': {
      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === '')
        ) {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), '[]'].join('')];
        }

        return [
          ...result,
          [encode(key, options), '[]=', encode(value, options)].join(''),
        ];
      };
    }

    case 'colon-list-separator': {
      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === '')
        ) {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), ':list='].join('')];
        }

        return [
          ...result,
          [encode(key, options), ':list=', encode(value, options)].join(''),
        ];
      };
    }

    case 'comma':
    case 'separator':
    case 'bracket-separator': {
      const keyValueSep =
        options.arrayFormat === 'bracket-separator' ? '[]=' : '=';

      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === '')
        ) {
          return result;
        }

        // Translate null to an empty string so that it doesn't serialize as 'null'
        value = value === null ? '' : value;

        if (result.length === 0) {
          return [
            [encode(key, options), keyValueSep, encode(value, options)].join(
              ''
            ),
          ];
        }

        return [
          [result, encode(value, options)].join(options.arrayFormatSeparator),
        ];
      };
    }

    default: {
      return (key) => (result, value) => {
        if (
          value === undefined ||
          (options.skipNull && value === null) ||
          (options.skipEmptyString && value === '')
        ) {
          return result;
        }

        if (value === null) {
          return [...result, encode(key, options)];
        }

        return [
          ...result,
          [encode(key, options), '=', encode(value, options)].join(''),
        ];
      };
    }
  }
}

export function parserForArrayFormat(options) {
  let result;

  switch (options.arrayFormat) {
    case 'index': {
      return (key, value, accumulator) => {
        result = /\[(\d*)]$/.exec(key);

        key = key.replace(/\[\d*]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };
    }

    case 'bracket': {
      return (key, value, accumulator) => {
        result = /(\[])$/.exec(key);
        key = key.replace(/\[]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [...accumulator[key], value];
      };
    }

    case 'colon-list-separator': {
      return (key, value, accumulator) => {
        result = /(:list)$/.exec(key);
        key = key.replace(/:list$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [...accumulator[key], value];
      };
    }

    case 'comma':
    case 'separator': {
      return (key, value, accumulator) => {
        const isArray =
          typeof value === 'string' &&
          value.includes(options.arrayFormatSeparator);
        const isEncodedArray =
          typeof value === 'string' &&
          !isArray &&
          decode(value, options).includes(options.arrayFormatSeparator);
        value = isEncodedArray ? decode(value, options) : value;
        const newValue =
          isArray || isEncodedArray
            ? value
                .split(options.arrayFormatSeparator)
                .map((item) => decode(item, options))
            : value === null
            ? value
            : decode(value, options);
        accumulator[key] = newValue;
      };
    }

    case 'bracket-separator': {
      return (key: any, value: any, accumulator: any) => {
        const isArray = /(\[])$/.test(key);
        key = key.replace(/\[]$/, '');

        if (!isArray) {
          accumulator[key] = value ? decode(value, options) : value;
          return;
        }

        const arrayValue =
          value === null
            ? []
            : value
                .split(options.arrayFormatSeparator)
                .map((item) => decode(item, options));

        if (accumulator[key] === undefined) {
          accumulator[key] = arrayValue;
          return;
        }

        accumulator[key] = [...accumulator[key], ...arrayValue];
      };
    }

    default: {
      return (key, value, accumulator) => {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [...[accumulator[key]].flat(), value];
      };
    }
  }
}

export function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}

export function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

export function decode(value, options) {
  if (options.decode) {
    return decodeURIComponent(value);
  }

  return value;
}

export function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === 'object') {
    return keysSorter(Object.keys(input))
      .sort((a, b) => Number(a) - Number(b))
      .map((key) => input[key]);
  }

  return input;
}

export function stringify(object, options) {
  if (!object) {
    return '';
  }

  options = {
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    ...options,
  };

  validateArrayFormatSeparator(options.arrayFormatSeparator);

  const shouldFilter = (key: string | number) =>
    (options.skipNull && isNullOrUndefined(object[key])) ||
    (options.skipEmptyString && object[key] === '');

  const formatter = encoderForArrayFormat(options);

  const objectCopy: any = {};

  for (const [key, value] of Object.entries(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = value;
    }
  }

  const keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys
    .map((key) => {
      const value = object[key];

      if (value === undefined) {
        return '';
      }

      if (value === null) {
        return encode(key, options);
      }

      if (Array.isArray(value)) {
        if (value.length === 0 && options.arrayFormat === 'bracket-separator') {
          return encode(key, options) + '[]';
        }

        return value.reduce(formatter(key), []).join('&');
      }

      return encode(key, options) + '=' + encode(value, options);
    })
    .filter((x) => x.length > 0)
    .join('&');
}

export function parse(query, options) {
  options = {
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false,
    ...options,
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
        (value as any)[key2] = parseValue(value2, options);
      }
    } else {
      returnValue[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return returnValue;
  }

  // TODO: Remove the use of `reduce`.
  // eslint-disable-next-line unicorn/no-array-reduce
  return (
    options.sort === true
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

export const encodeFragmentIdentifier = Symbol('encodeFragmentIdentifier');
