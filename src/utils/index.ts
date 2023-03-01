// Array utils
export { default as arrayRange } from './array/arrayRange';
export { default as sortArr } from './array/sortArr';
export { default as sortByMultiProperties } from './array/sortByMultiProperties';

// Function util
export { default as debounce } from './functions/debounce';
export { default as debouncePromise } from './functions/debouncePromise';
export { default as throttle } from './functions/throttle';
export { default as throttlePromise } from './functions/throttlePromise';
export { default as delay } from './functions/delay';
export { default as memoize } from './functions/memoize';
export { default as attempt } from './functions/attempt';
export { default as attemptAsync } from './functions/attemptAsync';

// General utils
export { default as conditionalReturn } from './general/conditionalReturn';
export { default as count } from './general/count';
export { default as toArray } from './general/toArray';
export { default as generateGuid } from './general/generateGuid';
export { default as getGlobalThis } from './general/getGlobalThis';
export { default as paramsToObject } from './general/paramsToObject';

// File utils
export { default as getBase64FromFile } from './file/getBase64FromFile';

// Number utils
export { default as getAverage } from './number/getAverage';
export { default as getSum } from './number/getSum';
export { default as multiplyAll } from './number/multiplyAll';

// String utils
export { default as addAndOrConjunctionsToStrArray } from './string/addAndOrConjunctionsToStrArray';
export { default as breakStrAfterNChar } from './string/breakStrAfterNChar';
export { default as extractUrlsFromString } from './string/extractUrlsFromString';
export { default as getAsciiCodeForChar } from './string/getAsciiCodeForChar';
export { default as getAsciiSumFromString } from './string/getAsciiSumFromString';
export { default as getFileExtensionFromString } from './string/getFileExtensionFromString';
export { default as getFirstNLetters } from './string/getFirstNLetters';
export { default as getHashFromString } from './string/getHashFromString';
export { default as getNameInitials } from './string/getNameInitials';
export { default as getNumberFromString } from './string/getNumberFromString';
export { default as hashString } from './string/hashString';
export { default as mapStringToColorFromArr } from './string/mapStringToColorFromArr';
export { default as nFormatter } from './string/nFormatter';
export { default as navigateObjWithString } from './string/navigateObjWithString';
export { default as parseDate } from './string/parseDate';
export { default as parseJwt } from './string/parseJwt';
export { default as parseNumber } from './string/parseNumber';
export { default as parseString } from './string/parseString';
export { default as splitOnFirst } from './string/splitOnFirst';
export { default as splitUpperCase } from './string/splitUpperCase';
export { default as stringToHexColor } from './string/stringToHexColor';
export { default as stringToHslColor } from './string/stringToHslColor';
export { default as capitalize } from './string/capitalize';

// Object utils
export { default as compare2ObjectsBaseOnKeysArr } from './object/compare2ObjectsBaseOnKeysArr';
export { default as deepCompareObjects } from './object/deepCompareObjects';
export { default as excludeKeys } from './object/excludeKeys';
export { default as includeKeys } from './object/includeKeys';
export { default as has } from './object/has';
export { default as joinObjects } from './object/joinObjects';
export { default as fastDeepEqual } from './object/fastDeepEqual';
export { default as getSmallestArrInObj } from './object/getSmallestArrInObj';

// Route utils
export { default as addHttpToURL } from './route/addHttpToURL';
export { default as excludeQueryParamFromUrl } from './route/excludeQueryParamFromUrl';
export { default as extractQueryFromUrl } from './route/extractQueryFromUrl';
export { default as parse } from './route/parse';
export { default as parseUrl } from './route/parseUrl';
export { default as pickQueryParamFromUrl } from './route/pickQueryParamFromUrl';
export { default as removeHashFromUrl } from './route/removeHashFromUrl';
export { default as stringifyUrl } from './route/stringifyUrl';

// Style utils
export { default as classNames } from './style/classNames';

// Validation utils
export { default as isArray } from './validation/isArray';
export { default as isArrayOfStrings } from './validation/isArrayOfStrings';
export { default as isBiggerThan } from './validation/isBiggerThan';
export { default as isDateType } from './validation/isDateType';
export { default as isEmail } from './validation/isEmail';
export { default as isEmpty } from './validation/isEmpty';
export { default as isFunction } from './validation/isFunction';
export { default as isLength } from './validation/isLength';
export { default as isNull } from './validation/isNull';
export { default as isNullOrEmptyString } from './validation/isNullOrEmptyString';
export { default as isNullOrUndefined } from './validation/isNullOrUndefined';
export { default as isBoolean } from './validation/isBoolean';
export { default as isNumber } from './validation/isNumber';
export { default as isObject } from './validation/isObject';
export { default as isSmallerThan } from './validation/isSmallerThan';
export { default as isString } from './validation/isString';
export { default as isTruthy } from './validation/isTruthy';
export { default as isURL } from './validation/isURL';
export { default as isUndefined } from './validation/isUndefined';
export { default as isWhiteSpace } from './validation/isWhiteSpace';
export { default as isBrowser } from './validation/isBrowser';
export { default as isObjectLike } from './validation/isObjectLike';


// Browser utils
export { default as addEventListener } from "./browser/addEventListener"
export { default as removeEventListener } from "./browser/removeEventListener"
export { default as getWindowObj } from "./browser/getWindowObj"
