export type GenerateQueryParamsStringType = <T>(queryObject: T) => string;

export type GetQueryParam = (param: string) => string | null;

export type GetPathNameType = () => string | null;

export type GetObjectFromQueryStringType = () => {
  [key: string]: [value: string];
};
