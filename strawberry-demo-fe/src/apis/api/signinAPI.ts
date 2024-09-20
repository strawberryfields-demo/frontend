import { API_URLS } from "@/constants/urls";
import apiCall from "../axios";
import { SignInRequestDTO, SignInResponseDTO } from "../dtos/signinDto";

const { SIGN_IN } = API_URLS.SIGN_IN;

export const signinAPI = async (data: SignInRequestDTO) => {
  return await apiCall<SignInRequestDTO, SignInResponseDTO>({
    method: "POST",
    //TODO: 타입 단언 개선 필요
    endpoint: SIGN_IN as string,
    data,
  });
};
