

/**
 * @description will convert the passed string camel-case to kebab case.
 * @example camelCaseToKebab("backgroundColor") // background-color
 */
export default function camelCaseToKebab(str: string): string {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase(); // convert camelCase to kebab-case
}
