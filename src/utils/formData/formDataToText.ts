/**
 * @description Converts a FormData object to a multipart/form-data text format.
 *
 * @param {FormData} formData - The FormData object to convert.
 * @param {string} boundary - The boundary string to use for multipart data.
 * @returns {string} - The multipart/form-data text representation.
 */
export default function formDataToText(formData: FormData, boundary: string): string {
    let bodyText = '';

    formData.forEach((value, key) => {
        bodyText += `--${boundary}\r\n`;
        bodyText += `Content-Disposition: form-data; name="${key}"\r\n\r\n`;
        bodyText += `${value}\r\n`;
    })

    bodyText += `--${boundary}--\r\n`; // End boundary
    return bodyText;
}