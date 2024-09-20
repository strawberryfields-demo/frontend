import { UseFormReturn, UseFormRegister } from "react-hook-form";
import _ from "lodash";
import { SignInFormData } from "@/types/forms";
import { VALIDATION_RULES } from "@/constants/validation/validationRules";
import useForm from "./useForm";

type SignInFormRegister = {
  [K in keyof SignInFormData]: ReturnType<UseFormRegister<SignInFormData>>;
};

export type UseSigninFormReturn = Omit<UseFormReturn<SignInFormData>, "register"> & {
  registers: SignInFormRegister;
};

export const useSigninForm = (): UseSigninFormReturn => {
  const { register, ...formResult } = useForm<SignInFormData>();

  const registers: SignInFormRegister = {
    email: register("email", _.pick(VALIDATION_RULES.email, ["required", "pattern"])),
    password: register("password", _.pick(VALIDATION_RULES.password, ["required"])),
  };

  return { ...formResult, registers };
};
