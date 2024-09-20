import { SignInRequestDTO } from "@/apis/dtos/signinDto";
import { SignInFormData } from "@/types/forms";

export const ConvertSignInFormDataToRequestDTO = (formData: SignInFormData): SignInRequestDTO => {
  return {
    email: formData.email,
    password: formData.password,
  };
};
