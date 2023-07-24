/**
 * @description it waits ms time and and resolves when ms is finished
 * @example sleep(1000);
 */
const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default sleep;
