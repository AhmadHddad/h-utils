import generateRandomInt from './generateRandomInt';
import generateRandomString from './generateRandomString';


/**
 * @description will generate a random object
 * @param fieldCount @default 10
 * @param options @default {allowNested:true}
 */
export default function generateRandomObj(
  fieldCount: number = 10,
  options: { allowNested?: boolean; allowNull?: boolean }
): Record<string, string | number | null | boolean> {
  const { allowNested, allowNull } = options || {};
  const generatedObj: Record<string, string | number | null | boolean> = {};

  for (let i = 0; i < fieldCount; i++) {
    let generatedObjField;

    switch (generateRandomInt(allowNested ? 6 : 5)) {
      case 0:
        generatedObjField = generateRandomInt(1000);
        break;

      case 1:
        generatedObjField = Math.random();
        break;

      case 2:
        generatedObjField = Math.random() < 0.5 ? true : false;
        break;

      case 3:
        generatedObjField = generateRandomString(generateRandomInt(4) + 4);
        break;

      case 4:
        if (allowNull) {
          generatedObjField = null;
        } else {
          generatedObjField = generateRandomString(generateRandomInt(4) + 4);
        }
        break;

      case 5:
        generatedObjField = generateRandomObj(fieldCount, options);
        break;
    }
    generatedObj[generateRandomString(8)] = generatedObjField;
  }
  return generatedObj;
}

// type Options = {
//   allowNested?: boolean;
//   allowNull?: boolean;
// };

// function generateRandomData(fieldCount: number = 10, options: Options = { allowNested: true }): Record<string, any> {
//   const data: Record<string, any> = {};
//   const { allowNested, allowNull } = options;

//   const getRandomDataType = () => {
//       const types = ['string', 'number', 'boolean', 'array'];
//       if (allowNested) types.push('object');
//       if (allowNull) types.push('null');
//       return types[Math.floor(Math.random() * types.length)];
//   };

//   const generateRandomValue = (type: string): any => {
//       switch (type) {
//           case 'string': return Math.random().toString(36).substring(7);
//           case 'number': return Math.floor(Math.random() * 100);
//           case 'boolean': return Math.random() < 0.5;
//           case 'array': return [generateRandomValue(getRandomDataType()), generateRandomValue(getRandomDataType())];
//           case 'object': return generateRandomData(fieldCount - 1, options);
//           case 'null': return null;
//           default: return undefined;
//       }
//   };

//   for (let i = 0; i < fieldCount; i++) {
//       const key = `field_${i}`;
//       const type = getRandomDataType();
//       data[key] = generateRandomValue(type);
//   }

//   return data;
// }

// // Example usage
// const randomObject = generateRandomData(10, { allowNested: false, allowNull:false });
// console.log(randomObject);

// console.log(Math.random().toString())
