import _ from "lodash";
import { FormRegister, FormReturn, SignInFormData } from "@/types/forms";
import { VALIDATION_RULES } from "@/constants/validation/validationRules";
import useForm from "./useForm";

export const useSigninForm = (): FormReturn<SignInFormData> => {
  const { register, ...formResult } = useForm<SignInFormData>();

  const registers: FormRegister<SignInFormData> = {
    email: register("email", _.pick(VALIDATION_RULES.email, ["required", "pattern"])),
    password: register("password", _.pick(VALIDATION_RULES.password, ["required"])),
  };

  return { ...formResult, registers };
};
