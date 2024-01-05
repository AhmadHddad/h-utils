import { randomInt } from "crypto";
import randomString from "./randomString";

export default function randomObj(
  fieldCount: number,
  options: { allowNested?: boolean; allowNull?: boolean }
): Record<string, string | number | null | boolean> {
  const { allowNested, allowNull } = options || {};
  const generatedObj: Record<string, string | number | null | boolean> = {};

  for (let i = 0; i < fieldCount; i++) {
    let generatedObjField;

    switch (randomInt(allowNested ? 6 : 5)) {
      case 0:
        generatedObjField = randomInt(1000);
        break;

      case 1:
        generatedObjField = Math.random();
        break;

      case 2:
        generatedObjField = Math.random() < 0.5 ? true : false;
        break;

      case 3:
        generatedObjField = randomString(randomInt(4) + 4);
        break;

      case 4:
        if (allowNull) {
          generatedObjField = null;
        } else {
          generatedObjField = randomString(randomInt(4) + 4);
        }
        break;

      case 5:
        generatedObjField = randomObj(fieldCount, options);
        break;
    }
    generatedObj[randomString(8)] = generatedObjField;
  }
  return generatedObj;
}
