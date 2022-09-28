import {requiredValueProps, validateType} from "@core/common/utils/formValidations/types";

export const requiredValue: requiredValueProps = (errorMsg = 'Required') => (values => values ? undefined : errorMsg);

export const validateWebsite: validateType = (value, errorMsg = "Invalid website") => value && !value.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi) ? errorMsg : undefined;

export const validateEmail: validateType = (value, errorMsg = "Invalid email address") => value && !value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) ? errorMsg : undefined;

export const validateFileName: validateType = (value, errorMsg = 'A file name can\'t contain any of the following characters \\ / : * ? " < > |') => value && !value.match(/^[^\\/:*?"<>|]*$/i) ? errorMsg : undefined;

export const userPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%=!@#$^&*()\-_+\\|{};:/.?\[\]])[A-Za-z\d[%=!@#$^&*()\-_+\\|{};:/.?\[\]]{8,}$/;
