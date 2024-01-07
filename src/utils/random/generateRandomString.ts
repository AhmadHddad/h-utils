import generateRandomInt from "./generateRandomInt";


/**
 * @description will generate a random string
 * @param size @default 10
 */
export default function generateRandomString(size: number = 10): string {
  const alphaChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let generatedString = '';
  for (let i = 0; i < size; i++) {
    generatedString += alphaChars[generateRandomInt(alphaChars.length)];
  }

  return generatedString;
}
