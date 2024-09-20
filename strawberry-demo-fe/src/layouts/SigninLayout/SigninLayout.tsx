import { Loader2 } from "lucide-react";

import Form from "@/components/FormElement/Form";
import Section from "@/components/PageLayout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm, SubmitHandler } from "react-hook-form";
import { SignInFormData } from "@/types/forms";
import ElementWithDivider from "@/components/Divider/ElementWithDivider";
import { Link } from "react-router-dom";
import { PAGE_PATHS } from "@/constants/paths";
import { PageTitle } from "@/components/PageLayout/PageElement";
import FormElement from "@/components/FormElement/FormElement";

type SigninLayoutProps = {
  onSignin: (formData: SignInFormData) => void;
  isOnLogin: boolean;
};

export default function SigninLayout({ onSignin, isOnLogin }: SigninLayoutProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignInFormData>({
    reValidateMode: "onSubmit",
    shouldFocusError: true,
  });

  const onSubmit: SubmitHandler<SignInFormData> = (data) => onSignin(data);

  return (
    <Section>
      <PageTitle title={"로그인"} className="text-center" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormElement label="이메일" htmlFor="email" errorMessage={errors.email?.message}>
          <Input
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "이메일 형식이 올바르지 않습니다.",
              },
            })}
          />
        </FormElement>
        <FormElement label="비밀번호" htmlFor="password" errorMessage={errors.password?.message}>
          <Input
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              // minLength: {
              //   value: 8,
              //   message: "비밀번호는 8자 이상이어야 합니다.",
              // },
              // maxLength: {
              //   value: 20,
              //   message: "비밀번호는 20자 이하여야 합니다.",
              // },
              // pattern: {
              //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
              //   message: "비밀번호는 영문 대소문자, 숫자를 포함해야 합니다.",
              // },
            })}
          />
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
