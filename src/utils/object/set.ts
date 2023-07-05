// export default function set<T extends object, V extends any>(
//   object: T,
//   path: string,
//   value: V
// ): T {
//     const copy = structuredClone(object);

//     return

//     return copy;

// }

const VOID = -1;
const PRIMITIVE = 0;
const ARRAY = 1;
const OBJECT = 2;
const DATE = 3;
const REGEXP = 4;
const MAP = 5;
const SET = 6;
const ERROR = 7;
const BIGINT = 8;

const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index)) return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
      case VOID:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value) arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value) object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const { source, flags } = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map(), index);
        for (const [key, index] of value) map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set(), index);
        for (const index of value) set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const { name, message } = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map(), serialized)(0);

// -------------------------- //

const EMPTY = '';

const { toString } = {};
const { keys } = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value) return [PRIMITIVE, type];

  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
  }

  if (asString.includes('Array')) return [ARRAY, asString];

  if (asString.includes('Error')) return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) =>
  TYPE === PRIMITIVE && (type === 'function' || type === 'symbol');

const serializer = (strict, json, $, _) => {
  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value)) return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict) throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
          case 'undefined':
            return as([VOID], value);
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type) return as([type, [...value]], value);

        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value) arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && 'toJSON' in value) return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const { source, flags } = value;
        return as([TYPE, { source, flags }], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
        }
        return index;
      }
    }

    const { message } = value;
    return as([TYPE, { name: type, message }], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
const serialize = (value, { json, lossy } = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map(), _)(value), _;
};

const obj = [1, 23, 4, 5, 3, 4, 5, 6];

const serialized = serialize(obj);

// console.log(serialized);

// console.log(deserialize(serialized));

function myStructuredClone(obj) {
    console.log(JSON.parse(JSON.stringify(obj)))
    const clonedObjects = new WeakMap();
  
    function replacer(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (clonedObjects.has(value)) {
          return clonedObjects.get(value);
        }
        clonedObjects.set(value, value);
      }
      return value;
    }
  


    // return JSON.parse(JSON.stringify(obj, replacer));
  }
  

  class Circular {
    constructor() {
      this.value = "Hello World";
      this.self = this;
    }
  }
  
  const circular = new Circular();
//   console.log(circular)

// console.log(structuredClone(circular));

// console.log(deserialize(serialize(circular)))



function structuredClone(obj) {
    const clonedObjects = new Map();
  
    function replacer(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (clonedObjects.has(value)) {
          return clonedObjects.get(value);
        }
        clonedObjects.set(value, value);
      }
      return value;
    }
  
    return JSON.parse(JSON.stringify(obj, replacer));
  }
  
// console.log(deserialize(["ahmad", 1]));



const HMACSHA256 = (stringToSign, secret) => "not_implemented"

// The header typically consists of two parts: 
// the type of the token, which is JWT, and the signing algorithm being used, 
// such as HMAC SHA256 or RSA.
const header = {
  "alg": "HS256",
  "typ": "JWT"
}
const encodedHeaders = btoa(JSON.stringify(header))


// The second part of the token is the payload, which contains the claims.
// Claims are statements about an entity (typically, the user) and 
// additional data. There are three types of claims: 
// registered, public, and private claims.
const claims = {
    "role": "admin"
}
const encodedPlayload = btoa(JSON.stringify(claims))


// create the signature part you have to take the encoded header, 
// the encoded payload, a secret, the algorithm specified in the header, 
// and sign that.
const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayload}`, "mysecret")
const encodedSignature = btoa(signature)

const jwt = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`
console.log(signature);