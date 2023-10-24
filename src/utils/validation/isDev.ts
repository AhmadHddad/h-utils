/**
 *@description will check if the current env is development
 */
export default function isDev(): boolean {
  if(!process || !process.env) return false;

  return (
    process?.env?.NODE_ENV === 'dev' ||
    process?.env?.NODE_ENV === 'development' ||
    process?.env?.NODE_ENV === undefined
  );
}
