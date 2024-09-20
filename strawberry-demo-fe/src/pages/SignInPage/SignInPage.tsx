import { PAGE_PATHS } from "@/constants/paths";
import { useSignin } from "@/hooks/useReactQuery/useSignin";
import SigninLayout from "@/layouts/SigninLayout/SigninLayout";
import { SignInFormData } from "@/types/forms";
import { ConvertSignInFormDataToRequestDTO } from "@/utils/adapter/signInAdapter";

export default function SignInPage() {
  const { signin, handleSignin } = useSignin<SignInFormData>(PAGE_PATHS.DASHBOARD, ConvertSignInFormDataToRequestDTO);

  return <SigninLayout onSignin={handleSignin} isOnLogin={signin.isPending} />;
}
