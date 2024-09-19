import { ENDPOINT, HTTP_METHOD } from "@/types/http";
import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { tokenRequestInterceptor, tokenResponseInterceptor } from "./services/tokenInterceptor";

export const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(tokenRequestInterceptor);
axiosInstance.interceptors.response.use(tokenResponseInterceptor.response, tokenResponseInterceptor.error);

type OPTIONS<D> = Omit<AxiosRequestConfig<D>, "method" | "url" | "data" | "headers" | "params">;
const apiCall = <RequestDTO, ResponseDTO>({
  method,
  endpoint,
  data,
  headers,
  params,
  option,
}: {
  method: HTTP_METHOD;
  endpoint: ENDPOINT;
  data?: RequestDTO;
  headers?: AxiosHeaders;
  params?: RequestDTO;
  option?: OPTIONS<RequestDTO>;
}) =>
  axiosInstance.request<ResponseDTO, AxiosResponse<ResponseDTO>, RequestDTO>({
    method,
    url: endpoint,
    data,
    headers,
    params,
    ...option,
  });

export default apiCall;
