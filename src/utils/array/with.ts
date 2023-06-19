import navigateObjWithString from '../object/navigateObjWithString';
import isArray from '../validation/isArray';
import isFunction from '../validation/isFunction';
import isNumber from '../validation/isNumber';
import isObject from '../validation/isObject';
import isString from '../validation/isString';

export function withArr<T = any>(arr: T[], indexOrPredictor: number |string, replacer:T) {
  if (!isArray(arr)) return arr;

  if (isNumber(indexOrPredictor)) return arr.map((v, i) => (i === indexOrPredictor ? replacer : v));

  if(isString(indexOrPredictor)) return arr.map((v,i)=>{
    if(isObject(v)) {
      const obj = navigateObjWithString(v, indexOrPredictor);
      
    }
  })

}
