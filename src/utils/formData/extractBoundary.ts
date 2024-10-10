/**
 * @description Extracts the boundary string (including the leading '------') from a multipart/form-data text.
 *
 * @param {string} dataText - The multipart/form-data text from which to extract the boundary.
 * @returns {string | null} - The extracted boundary string, or null if no boundary is found.
 */
export default function extractBoundary(dataText: string): string | null {
    const boundaryMatch = dataText.match(/(--[^\r\n]+)/) ?? dataText.match(/--([^\r\n]+)/);
    return boundaryMatch ? boundaryMatch[1] : null; // Return the full boundary including '------'
}