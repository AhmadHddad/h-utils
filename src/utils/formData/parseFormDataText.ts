import extractBoundary from "./extractBoundary";

/**
 * Parses a multipart/form-data or application/x-www-form-urlencoded formatted string into a JSON object.
 *
 * This function handles both `multipart` formatted strings and URL-encoded strings, converting them into
 * a JSON object. It can process multipart types such as `form-data`, `related`, and `mixed`, as well as
 * application/x-www-form-urlencoded. If a boundary is not provided, it will be inferred from the input text.
 *
 * @param {string} dataText - The formatted string to parse, either multipart or URL-encoded.
 * @param {string} [boundary] - The boundary string used to separate parts of the form data (required for multipart).
 * @returns {Record<string, unknown>} - A JSON object representing the parsed data.
 *
 * @example
 * const formDataText = 
 * `------WebKitFormBoundary123456\r\n
 * Content-Disposition: form-data; name="username"\r\n\r\n
 * john_doe\r\n
 * ------WebKitFormBoundary123456--\r\n`;
 * const parsedData = parseFormDataText(formDataText);
 * console.log(parsedData); // { username: 'john_doe' }
 *
 * const urlEncodedData = 'username=john_doe&age=30';
 * const parsedUrlData = parseFormDataText(urlEncodedData);
 * console.log(parsedUrlData); // { username: 'john_doe', age: '30' }
 */
export default function parseFormDataText(dataText: string, boundary?: string): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    let boundaryPassed = !!boundary;
    // Check for boundary in multipart data if not provided
    if (!boundary) {
        const extractedBoundary = extractBoundary(dataText);
        if (extractedBoundary) {
            boundary = extractedBoundary;
        }
    }

    if (boundary) {
        // Handle multipart data
        const parts = dataText.split(boundaryPassed ? `--${boundary}` : boundary);

        parts.forEach(part => {
            part = part.trim();
            if (!part || part === '--') return; // Skip empty parts or just boundary lines

            const [header, ...contentLines] = part.split('\r\n\r\n');
            const content = contentLines.join('\r\n\r\n').trim(); // Join content lines

            const nameMatch = header.match(/name="([^"]+)"/);
            if (nameMatch) {
                const name = nameMatch[1];
                // Split the content by new lines to get all values
                const values = content.split('\r\n').map(line => line.trim()).filter(line => line); // Split and filter empty lines

                // Assign values to result
                if (result[name]) {
                    // If the key already exists, make sure it's an array
                    result[name] = Array.isArray(result[name]) ? [...result[name], ...values] : [result[name], ...values];
                } else {
                    result[name] = values.length > 1 ? values : values[0]; // Handle single vs. multiple values
                }
            }
        });
    } else {
        // Handle URL-encoded data
        const pairs = dataText.split('&');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            const decodedKey = decodeURIComponent(key);
            const decodedValue = decodeURIComponent(value || '');
            result[decodedKey] = result[decodedKey]
                ? [...(Array.isArray(result[decodedKey]) ? result[decodedKey] : [result[decodedKey]]), decodedValue]
                : decodedValue;
        });
    }

    return result;
}

