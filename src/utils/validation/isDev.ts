/**
 *@description will check if the current env is development
 */
export default function isDev(): boolean {
  return (
    process?.env?.NODE_ENV === 'dev' ||
    process?.env?.NODE_ENV === 'development' ||
    process?.env?.NODE_ENV === undefined
  );
}
