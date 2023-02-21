/**
 *
 * @example getBase64FromFile(new File([""], "filename")) => "data:application/octet-stream;base64,"
 * @param {File} file
 */
export function getBase64FromFile(file: File): Promise<ArrayBuffer | string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}
