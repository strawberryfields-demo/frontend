import { API_URLS } from "@/constants/urls";
import apiCall from "../axios";
import { SignInRequestDTO, SignInResponseDTO } from "../dtos/signinDto";

const { SIGN_IN } = API_URLS.SIGN_IN;

export const signinAPI = async (data: SignInRequestDTO) => {
  return await apiCall<SignInRequestDTO, SignInResponseDTO>({
    method: "POST",
    endpoint: SIGN_IN,
    data,
  });
};
