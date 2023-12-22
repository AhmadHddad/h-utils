export const urlRegexForLongStr = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
export const urlRegexForShortStr = /^(https?:\/\/)?((([\da-z\.-]+|\blocalhost\b)(([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,})|((\d{1,3}\.){3}\d{1,3})|localhost)(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
export const httpURLRegex = /^((http|https|ftp):\/\/)/;
export const upperCaseRegex = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
export const emailRegexForLongStr = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
export const emailRegexForShortStr = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const whitespaceRegex = /^\s$/;
export const hexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
export const rgbColorRegex = /^rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})(, ([01](\.\d*)?))?\)$/;
  