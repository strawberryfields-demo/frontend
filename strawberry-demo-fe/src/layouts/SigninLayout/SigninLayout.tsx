import { Loader2 } from "lucide-react";

import Form from "@/components/FormElement/Form";
import Section from "@/components/PageLayout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SignInFormData } from "@/types/forms";
import ElementWithDivider from "@/components/Divider/ElementWithDivider";
import { Link } from "react-router-dom";
import { PAGE_PATHS } from "@/constants/paths";
import { PageTitle } from "@/components/PageLayout/PageElement";
import FormElement from "@/components/FormElement/FormElement";
import { UseSigninFormReturn } from "@/hooks/useForm/useSigninForm";

type SigninLayoutProps = {
  onSubmit: (formData: SignInFormData) => void;
  isOnLogin: boolean;
  signinFormResults: UseSigninFormReturn;
};

export default function SigninLayout({
  onSubmit,
  isOnLogin,
  signinFormResults: {
    registers: { email, password },
    formState: { errors },
    handleSubmit,
  },
}: SigninLayoutProps) {
  return (
    <Section>
      <PageTitle title={"로그인"} className="text-center" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormElement label="이메일" htmlFor="email" errorMessage={errors.email?.message}>
          <Input placeholder="이메일" isError={!!errors.email?.message} {...email} />
        </FormElement>
        <FormElement label="비밀번호" htmlFor="password" errorMessage={errors.password?.message}>
          <Input placeholder="비밀번호" type="password" isError={!!errors.password?.message} {...password} />
        </FormElement>
        <Button disabled={isOnLogin}>
          {isOnLogin && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          로그인
        </Button>
      </Form>
      <div className="flex justify-center py-4">
        <ElementWithDivider>
          <Link to={PAGE_PATHS.SIGN_UP}>회원가입</Link>
          <Link to={""}>비밀번호 찾기</Link>
        </ElementWithDivider>
      </div>
    </Section>
  );
}
