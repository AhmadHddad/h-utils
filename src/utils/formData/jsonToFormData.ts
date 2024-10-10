/**
 * @description Converts a JSON object into a specified multipart or URL-encoded formatted string.
 *
 * This function takes a JSON object and constructs a string that follows the specified
 * multipart format or URL-encoded format. It allows for arrays, objects, and simple data types,
 * supporting `form-data`, `related`, `mixed`, and `application/x-www-form-urlencoded`.
 *
 * @param {Record<string, unknown>} jsonData - The JSON object where keys are form field names 
 * and values can be strings, numbers, arrays, or nested objects.
 * @param {string} [boundary] - The boundary string used to separate parts of the form data (required for multipart).
 * @param {'form-data' | 'related' | 'mixed' | 'urlencoded'} [type='form-data'] - The type of format to use.
 * @returns {string} - A string representing the specified formatted data.
 *
 * @example
 * const json = { username: 'john_doe', age: 30, files: ['file1.png', 'file2.jpg'] };
 * const boundary = '----WebKitFormBoundary123456';
 * const formDataText = jsonToFormData(json, boundary, 'form-data');
 * console.log(formDataText); // Outputs multipart/form-data formatted string
 *
 * const urlEncodedText = jsonToFormData(json, undefined, 'urlencoded');
 * console.log(urlEncodedText); // Outputs application/x-www-form-urlencoded string
 */
export default function jsonToFormData(
    jsonData: Record<string, unknown>,
    type: 'form-data' | 'related' | 'mixed' | 'urlencoded' = 'form-data',
    boundary?: string,
): string {
    if (type === 'urlencoded') {
        return Object.entries(jsonData)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
            .join('&');
    }

    let formDataText = '';

    for (const key in jsonData) {
        const value = jsonData[key];

        // Handle arrays
        if (Array.isArray(value)) {
            value.forEach(item => {
                formDataText += `--${boundary}\r\n`;
                formDataText += `Content-Disposition: ${type === 'form-data' ? 'form-data' : type}; name="${key}[]"\r\n\r\n`;
                formDataText += `${item}\r\n`;
            });
        } else if (value && typeof value === 'object') {
            // Handle nested objects
            Object.keys(value).forEach(subKey => {
                formDataText += `--${boundary}\r\n`;
                formDataText += `Content-Disposition: ${type === 'form-data' ? 'form-data' : type}; name="${key}[${subKey}]"\r\n\r\n`;
                formDataText += `${value[subKey]}\r\n`;
            });
        } else {
            // Handle simple values
            formDataText += `--${boundary}\r\n`;
            formDataText += `Content-Disposition: ${type === 'form-data' ? 'form-data' : type}; name="${key}"\r\n\r\n`;
            formDataText += `${value}\r\n`;
        }
    }

    formDataText += `--${boundary}--\r\n`;  // End boundary
    return formDataText;
}

