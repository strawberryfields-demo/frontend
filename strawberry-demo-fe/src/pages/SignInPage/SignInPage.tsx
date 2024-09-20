import { PAGE_PATHS } from "@/constants/paths";
import { useSigninForm } from "@/hooks/useForm/useSigninForm";
import { useSignin } from "@/hooks/useReactQuery/useSignin";
import SigninLayout from "@/layouts/SigninLayout/SigninLayout";
import { SignInFormData } from "@/types/forms";
import { ConvertSignInFormDataToRequestDTO } from "@/utils/adapter/signInAdapter";
import { useEffect } from "react";

export default function SignInPage() {
  const { signin, handleSignin } = useSignin<SignInFormData>(PAGE_PATHS.DASHBOARD, ConvertSignInFormDataToRequestDTO);
  const signinFormResults = useSigninForm();

  //에러 관리
  useEffect(() => {
    if (signin.error && signin.error.response) {
      const { email, password } = signin.error.response.data;
      email && signinFormResults.setError("email", { message: email[0] });
      password && signinFormResults.setError("password", { message: password[0] });
    }
  }, [signin.error]);

  return <SigninLayout onSubmit={handleSignin} isOnLogin={signin.isPending} signinFormResults={signinFormResults} />;
}
