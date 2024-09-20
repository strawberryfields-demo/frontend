import { signinAPI } from "@/apis/api/signinAPI";
import { SignInRequestDTO, SignInResponseErrorDTO } from "@/apis/dtos/signinDto";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useSignin = <OriginDataType>(
  redirectToIfSuccess: string,
  adapter: (originData: OriginDataType) => SignInRequestDTO,
) => {
  const navigate = useNavigate();

  const signin = useMutation({
    mutationFn: (data: SignInRequestDTO) => signinAPI(data),
    onSuccess: ({ data }) => {
      localStorage.setItem("access_token", data.access_token);
      navigate(redirectToIfSuccess);
    },
    //TODO:  에러 처리
    //TODO: AxiosError를 직접 써야하는 것이 불만, 개선 방법있는지 탐색
    onError: (error: AxiosError<SignInResponseErrorDTO>) => {
      console.log(error.response?.data);
    },
  });

  const handleSignin = useCallback(
    (originData: OriginDataType) => {
      if (signin.isPending) return;
      const convertedData = adapter?.(originData);
      signin.reset();
      signin.mutate(convertedData);
    },
    [signin],
  );

  //TODO: 로그인 유효성 검증

  return {
    signin,
    handleSignin,
  };
};
