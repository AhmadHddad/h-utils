export const regexIsUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

export const regxIsHttpUrl = /^((http|https|ftp):\/\/)/;

export const regexIsUpperCase = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g;
