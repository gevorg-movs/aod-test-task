export default {
  string: (attribute: string) => `The ${attribute} field must be a string`,
  empty: (attribute: string) => `The ${attribute} field can't be empty`,
  email: (attribute: string) =>
    `The ${attribute} field must be a valid email address`,
  number: (attribute: string) => `The ${attribute} field must be a number`,
  array: (attribute: string) => `The ${attribute} field must be an array`,
  required: (attribute: string) => `The ${attribute} field is required`,
  min: (attribute: string, min: number) =>
    `The ${attribute} field must be at least ${min}`,
  max: (attribute: string, max: number) =>
    `The ${attribute} field must not be greater than ${max}`,
  between: (attribute: string, min: number, max: number) =>
    `The ${attribute} field must not be between ${min} and ${max}`,
  type: (attribute: string, type: string) =>
    `The ${attribute} field must be type of ${type}`,
};