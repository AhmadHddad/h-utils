import { semverLiteFullRegexPattern } from '../regex/semVerLiteRegex';

/**
 * @description Class Definition: SemverLite is defined to handle version strings.
 * This is just a very lite semver implementation, if you need the actual thing you can check https://www.npmjs.com/package/semver 
 */
export default class SemverLite {
  private static readonly versionRegex = new RegExp(semverLiteFullRegexPattern);

  /**
   * @description Compares two versions and returns true if version1 is larger than version2.
   */
  static largerThan(version1: string, version2: string): boolean {
    const v1 = SemverLite.parse(version1);
    const v2 = SemverLite.parse(version2);
    return v1 > v2;
  }

  /**
   * @description Compares two versions and returns true if version1 is lower than version2.
   */
  static lowerThan(version1: string, version2: string): boolean {
    const v1 = SemverLite.parse(version1);
    const v2 = SemverLite.parse(version2);
    return v1 < v2;
  }

  /**
   * @description Checks if a version string is valid.
   */
  static isValid(version: string): boolean {
    return this.versionRegex.test(version);
  }

  /**
   * @description Extracts the numeric version part from a string.
   */
  static coerce(version: string): string {
    const match = version.match(/\d+(\.\d+)?(\.\d+)?/);
    return match ? match[0] : '0.0.0';
  }

  /**
   * @description Returns the smallest version from an array of versions.
   */
  static minVersion(versions: string[]): string {
    return versions.reduce((min, v) =>
      SemverLite.lowerThan(v, min) ? v : min
    );
  }

  /**
   * @description Converts a version string into a comparable numeric value.
   */
  static parse(version: string): number {
    const parts = version.split(/[\.\-\+]/).map(Number);
    const [major, minor, patch] = parts;
    return major * 1e6 + minor * 1e3 + patch;
  }
}
