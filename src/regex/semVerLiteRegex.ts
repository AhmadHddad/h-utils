export const semverLiteRegexParts: Record<
  'major' | 'minor' | 'patch' | 'preRelease' | 'buildMetadata',
  string
> = {
  // Major version
  major: '^(0|[1-9]\\d*)',

  // Minor version
  minor: '\\.(0|[1-9]\\d*)',

  // Patch version
  patch: '\\.(0|[1-9]\\d*)',

  // Pre-release (optional)
  preRelease:
    '(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?',

  // Build metadata (optional)
  buildMetadata: '(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$',
};

// Combine the parts into a full regex pattern
export const semverLiteFullRegexPattern = [
  semverLiteRegexParts.major,
  semverLiteRegexParts.minor,
  semverLiteRegexParts.patch,
  semverLiteRegexParts.preRelease,
  semverLiteRegexParts.buildMetadata,
].join('');
