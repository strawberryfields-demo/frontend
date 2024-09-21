import { FieldValues, UseFormRegister, UseFormReturn } from "react-hook-form";

export type FormRegister<FormData extends FieldValues> = {
  [K in keyof FormData]: ReturnType<UseFormRegister<FormData>>;
};

export type FormReturn<FormData extends FieldValues> = Omit<UseFormReturn<FormData>, "register"> & {
  registers: FormRegister<FormData>;
};

export type SignInFormData = {
  email: string;
  password: string;
};
