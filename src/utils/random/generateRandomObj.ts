import generateRandomInt from './generateRandomInt';
import generateRandomString from './generateRandomString';

/**
 * @description will generate a random object
 * @example generateRandomObj() // {  JcaOXYeU: true, qZDEUnCs: 0.32064102262293903, RLvQgfll: true, GJSZIsnA: 413, iRjWgHkA: 'aNMnPg', aqXHzOuF: 'iGPp', ZVxrygDP: 252, KqrqvGbb: 'LuEdtd'}
 * @param fieldCount @default 10
 * @param options @default {allowNested:true}
 */
export default function generateRandomObj(
  fieldCount = 10,
  options?: { allowNested?: boolean; allowNull?: boolean }
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
        generatedObjField = generateRandomObj(fieldCount);
        break;
    }
    generatedObj[generateRandomString(8)] = generatedObjField;
  }
  return generatedObj;
}
