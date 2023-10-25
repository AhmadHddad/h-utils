import getGlobalThis from "../general/getGlobalThis";

/**
 *@description will check if the current env is development
 */
export default function isDev(): boolean {
  const global = getGlobalThis();
  if(!global.process || !global.process.env) return false;

  return (
    global.process?.env?.NODE_ENV === 'dev' ||
    global.process?.env?.NODE_ENV === 'development' ||
    global.process?.env?.NODE_ENV === undefined
  );
}
