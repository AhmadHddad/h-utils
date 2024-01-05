import randomInt from "./randomInt";

export default function randomString(size: number): string {
  const alphaChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let generatedString = '';
  for (let i = 0; i < size; i++) {
    generatedString += alphaChars[randomInt(alphaChars.length)];
  }

  return generatedString;
}
