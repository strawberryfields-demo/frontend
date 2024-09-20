import _ from "lodash";
import { SignInFormData } from "@/types/forms";
import useForm from "./useForm";
import { VALIDATION_RULES } from "@/constants/validation/validationRules";

export const useSigninForm = () => {
  const { register, ...formResult } = useForm<SignInFormData>();

  const registers = {
    email: register("email", _.pick(VALIDATION_RULES.email, ["required", "pattern"])),
    password: register("password", _.pick(VALIDATION_RULES.password, ["required"])),
  };

  return { ...formResult, registers };
};
