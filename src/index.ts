export * from "./regex/index";
export { default as HMap } from './extensions/HMap';

// Array utils
export { default as arrayRange } from './utils/array/arrayRange';
export { default as removeDuplicatesFromArr } from './utils/array/removeDuplicatesFromArr';
export { default as uniqueArray } from './utils/array/removeDuplicatesFromArr';
export { default as sortArr } from './utils/array/sortArr';
export { default as sortByMultiProperties } from './utils/array/sortByMultiProperties';

// Function util
export { default as debounce } from './utils/functions/debounce';
export { default as debouncePromise } from './utils/functions/debouncePromise';
export { default as throttle } from './utils/functions/throttle';
export { default as throttlePromise } from './utils/functions/throttlePromise';
export { default as delay } from './utils/functions/delay';
export { default as memoize } from './utils/functions/memoize';
export { default as attempt } from './utils/functions/attempt';
export { default as attemptAsync } from './utils/functions/attemptAsync';

// General utils
export { default as conditionalReturn } from './utils/general/conditionalReturn';
export { default as count } from './utils/general/count';
export { default as toArray } from './utils/general/toArray';
export { default as noop } from './utils/general/noop';
export { default as generateGuid } from './utils/general/generateGuid';
export { default as getGlobalThis } from './utils/general/getGlobalThis';
export { default as paramsToObject } from './utils/general/paramsToObject';

// File utils
export { default as getBase64FromFile } from './utils/file/getBase64FromFile';

// Number utils
export { default as getAverage } from './utils/number/getAverage';
export { default as getSum } from './utils/number/getSum';
export { default as multiplyAll } from './utils/number/multiplyAll';

// String utils
export { default as addAndOrConjunctionsToStrArray } from './utils/string/addAndOrConjunctionsToStrArray';
export { default as breakStrAfterNChar } from './utils/string/breakStrAfterNChar';
export { default as extractUrlsFromString } from './utils/string/extractUrlsFromString';
export { default as getAsciiCodeForChar } from './utils/string/getAsciiCodeForChar';
export { default as getAsciiSumFromString } from './utils/string/getAsciiSumFromString';
export { default as getFileExtensionFromString } from './utils/string/getFileExtensionFromString';
export { default as getFirstNLetters } from './utils/string/getFirstNLetters';
export { default as getHashFromString } from './utils/string/getHashFromString';
export { default as getNameInitials } from './utils/string/getNameInitials';
export { default as getNumberFromString } from './utils/string/getNumberFromString';
export { default as hashString } from './utils/string/hashString';
export { default as mapStringToColorFromArr } from './utils/string/mapStringToColorFromArr';
export { default as nFormatter } from './utils/string/nFormatter';
export { default as parseDate } from './utils/string/parseDate';
export { default as parseJwt } from './utils/string/parseJwt';
export { default as parseNumber } from './utils/string/parseNumber';
export { default as parseString } from './utils/string/parseString';
export { default as splitOnFirst } from './utils/string/splitOnFirst';
export { default as splitUpperCase } from './utils/string/splitUpperCase';
export { default as stringToHexColor } from './utils/string/stringToHexColor';
export { default as stringToHslColor } from './utils/string/stringToHslColor';
export { default as capitalize } from './utils/string/capitalize';
export { default as occurrences } from './utils/string/occurrences';

// Object utils
export { default as compare2ObjectsBaseOnKeysArr } from './utils/object/compare2ObjectsBaseOnKeysArr';
export { default as deepCompare } from './utils/object/deepCompare';
export { default as excludeKeys } from './utils/object/excludeKeys';
export { default as navigateObjWithString } from './utils/object/navigateObjWithString';
export { default as includeKeys } from './utils/object/includeKeys';
export { default as has } from './utils/object/has';
export { default as joinObjects } from './utils/object/joinObjects';
export { default as fastDeepEqual } from './utils/object/fastDeepEqual';
export { default as getSmallestArrInObj } from './utils/object/getSmallestArrInObj';

// Route utils
export { default as addHttpToURL } from './utils/route/addHttpToURL';
export { default as excludeQueryParamFromUrl } from './utils/route/excludeQueryParamFromUrl';
export { default as extractQueryFromUrl } from './utils/route/extractQueryFromUrl';
export { default as parse } from './utils/route/parse';
export { default as parseUrl } from './utils/route/parseUrl';
export { default as pickQueryParamFromUrl } from './utils/route/pickQueryParamFromUrl';
export { default as removeHashFromUrl } from './utils/route/removeHashFromUrl';
export { default as stringifyUrl } from './utils/route/stringifyUrl';

// Style utils
export { default as classNames } from './utils/style/classNames';

// Validation utils
export { default as isArray } from './utils/validation/isArray';
export { default as isArrayOfStrings } from './utils/validation/isArrayOfStrings';
export { default as isBiggerThan } from './utils/validation/isBiggerThan';
export { default as isDateType } from './utils/validation/isDateType';
export { default as isEmail } from './utils/validation/isEmail';
export { default as isEmpty } from './utils/validation/isEmpty';
export { default as isFunction } from './utils/validation/isFunction';
export { default as isLength } from './utils/validation/isLength';
export { default as isNull } from './utils/validation/isNull';
export { default as isNullOrEmptyString } from './utils/validation/isNullOrEmptyString';
export { default as isNullOrUndefined } from './utils/validation/isNullOrUndefined';
export { default as isBoolean } from './utils/validation/isBoolean';
export { default as isNumber } from './utils/validation/isNumber';
export { default as isObject } from './utils/validation/isObject';
export { default as isSmallerThan } from './utils/validation/isSmallerThan';
export { default as isString } from './utils/validation/isString';
export { default as isTruthy } from './utils/validation/isTruthy';
export { default as isURL } from './utils/validation/isURL';
export { default as isUndefined } from './utils/validation/isUndefined';
export { default as isWhiteSpace } from './utils/validation/isWhiteSpace';
export { default as isBrowser } from './utils/validation/isBrowser';
export { default as isObjectLike } from './utils/validation/isObjectLike';
export { default as isObjHasValues } from './utils/validation/isObjHasValues';


// Browser utils
export { default as addEventListener } from "./utils/browser/addEventListener"
export { default as removeEventListener } from "./utils/browser/removeEventListener"
export { default as getWindowObj } from "./utils/browser/getWindowObj"
export { default as animationInterval } from "./utils/browser/animationInterval"
export { default as onSetInterval } from "./utils/browser/animationInterval"
export { default as onUrlChange } from "./utils/browser/onUrlChange"
export { default as getHtmlElementCoords } from "./utils/browser/getHtmlElementCoords"
export { default as getBrowser } from "./utils/browser/getBrowser"



// Types
export * from "./utils/types";
