import { useForm as DefaultUseForm, UseFormProps } from "react-hook-form";

const useForm = <TFieldValues extends Record<string, any> = Record<string, any>>(
  props?: UseFormProps<TFieldValues>,
) => {
  return DefaultUseForm<TFieldValues>({
    reValidateMode: "onSubmit",
    shouldFocusError: true,
    ...props,
  });
};

export default useForm;
