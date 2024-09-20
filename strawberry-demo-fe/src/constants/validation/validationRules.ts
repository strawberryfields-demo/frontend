import { RegisterOptions } from "react-hook-form";
import { VALIDATION_MESSAGES } from "./validationMessages";
import { VALIDATION_PATTERNS } from "./validationPatterns";
import { VALIDATION_RANGES } from "./validationRanges";

type ExtendedRegisterOptions = RegisterOptions &
  Partial<{
    notExist: string;
    incorrect: string;
  }>;

export const VALIDATION_RULES: Record<string, ExtendedRegisterOptions> = {
  email: {
    required: VALIDATION_MESSAGES.email.required,
    pattern: {
      value: VALIDATION_PATTERNS.email,
      message: VALIDATION_MESSAGES.email.pattern,
    },
    notExist: VALIDATION_MESSAGES.email.notExist,
  },
  password: {
    required: VALIDATION_MESSAGES.password.required,
    minLength: {
      value: VALIDATION_RANGES.password.minLength,
      message: VALIDATION_MESSAGES.password.minLength,
    },
    maxLength: {
      value: VALIDATION_RANGES.password.maxLength,
      message: VALIDATION_MESSAGES.password.maxLength,
    },
    pattern: {
      value: VALIDATION_PATTERNS.password,
      message: VALIDATION_MESSAGES.password.pattern,
    },
    incorrect: VALIDATION_MESSAGES.password.incorrect,
  },
};
