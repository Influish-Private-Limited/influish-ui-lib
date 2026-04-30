export type ValidationRule<T = string> = {
    validate: (value: T) => boolean;
    message: string;
};
export type ValidationResult = {
    valid: boolean;
    errors: string[];
};
/** Run a list of validation rules against a value and return all errors. */
export declare function validate<T>(value: T, rules: ValidationRule<T>[]): ValidationResult;
export declare const required: (msg?: string) => ValidationRule;
export declare const minLength: (min: number, msg?: string) => ValidationRule;
export declare const maxLength: (max: number, msg?: string) => ValidationRule;
export declare const pattern: (regex: RegExp, msg: string) => ValidationRule;
export declare const email: (msg?: string) => ValidationRule;
export declare const url: (msg?: string) => ValidationRule;
export declare const numeric: (msg?: string) => ValidationRule;
