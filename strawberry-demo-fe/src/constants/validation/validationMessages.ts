import { VALIDATION_RANGES } from "./validationRanges";

export const VALIDATION_MESSAGES = {
  email: {
    required: "이메일을 입력해주세요",
    pattern: "이메일 형식이 올바르지 않습니다",
    notExist: "존재하지 않는 이메일입니다",
  },
  password: {
    required: "비밀번호를 입력해주세요",
    minLength: `비밀번호는 ${VALIDATION_RANGES.password.minLength}자 이상이어야 합니다`,
    maxLength: `비밀번호는 ${VALIDATION_RANGES.password.maxLength}자 이하여야 합니다`,
    pattern: "비밀번호는 영문 대소문자, 숫자를 포함해야 합니다",
    incorrect: "비밀번호가 일치하지 않습니다",
  },
  chekced_password: {
    incorrect: "비밀번호가 일치하지 않습니다",
  },
};
