// ─── Validators ────────────────────────────────────────────────────────────

export type ValidationRule<T = string> = {
  validate: (value: T) => boolean;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: string[];
};

/** Run a list of validation rules against a value and return all errors. */
export function validate<T>(value: T, rules: ValidationRule<T>[]): ValidationResult {
  const errors: string[] = [];
  for (const rule of rules) {
    if (!rule.validate(value)) {
      errors.push(rule.message);
    }
  }
  return { valid: errors.length === 0, errors };
}

// ─── Built-in Rules ─────────────────────────────────────────────────────────

export const required = (msg = "This field is required"): ValidationRule => ({
  validate: (v) => v.trim().length > 0,
  message: msg,
});

export const minLength = (min: number, msg?: string): ValidationRule => ({
  validate: (v) => v.length >= min,
  message: msg ?? `Must be at least ${min} characters`,
});

export const maxLength = (max: number, msg?: string): ValidationRule => ({
  validate: (v) => v.length <= max,
  message: msg ?? `Must be at most ${max} characters`,
});

export const pattern = (regex: RegExp, msg: string): ValidationRule => ({
  validate: (v) => regex.test(v),
  message: msg,
});

export const email = (msg = "Must be a valid email address"): ValidationRule =>
  pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, msg);

export const url = (msg = "Must be a valid URL"): ValidationRule =>
  pattern(/^https?:\/\/.+/, msg);

export const numeric = (msg = "Must be a number"): ValidationRule => ({
  validate: (v) => !isNaN(Number(v)) && v.trim().length > 0,
  message: msg,
});
