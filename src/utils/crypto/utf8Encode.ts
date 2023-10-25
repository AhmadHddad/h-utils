import { Utf8EncodeTypes } from '../types';

export default function utf8Encode(input: Utf8EncodeTypes): Uint8Array {
  if (typeof input === 'undefined') return utf8Encode('undefined');

  if (Array.isArray(input)) {
    // For arrays, convert their elements to a string
    const arrayString = input
      .map((item: Utf8EncodeTypes) => utf8Encode(item))
      .join(',');
    return utf8Encode(arrayString);
  }

  if (typeof input === 'object') {
    if (input === null) {
      return utf8Encode('null');
    }

    if (input instanceof Date) {
      return utf8Encode(input.toISOString());
    }

    // For other objects, convert their properties to a string
    const objectString = Object.keys(input)
      .map((key) => `${key}:${utf8Encode(input[key])}`)
      .join(',');
    return utf8Encode(objectString);
  }

  if (typeof input === 'string') {
    // Use TextEncoder for string encoding
    const encoder = new TextEncoder();
    return encoder.encode(input);
  }

  if (typeof input === 'number') {
    return utf8Encode(input.toString());
  }

  if (typeof input === 'boolean') {
    return utf8Encode(input.toString());
  }

  // Handle other types as needed
  return new Uint8Array(0); // Return an empty byte array for unsupported types
}
