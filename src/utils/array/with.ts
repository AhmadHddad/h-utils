// import navigateObjWithString from '../object/navigateObjWithString';
// import isArray from '../validation/isArray';
// import isNumber from '../validation/isNumber';
// import isObject from '../validation/isObject';
// import isString from '../validation/isString';

// export default function withArr<T = unknown>(arr: T[], indexOrPredictor: number |string, replacer:T) {
//   if (!isArray(arr)) return arr;

//   if (isNumber(indexOrPredictor)) return arr.map((v, i) => (i === indexOrPredictor ? replacer : v));

//   if(isString(indexOrPredictor)) return arr.map((v,i)=>{
//     if(isObject(v)) {
//       const obj = navigateObjWithString(v, indexOrPredictor);
      
//     }
//   })

//   return arr;
// }
