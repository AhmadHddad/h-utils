export type requiredValueProps = (errorMsg?: string | undefined) => (values: any) => string | void | Promise<string | void>;

export type validateType = (value: string | undefined, errorMsg?: string) => string | undefined;