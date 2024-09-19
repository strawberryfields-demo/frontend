import { ENDPOINT, HTTP_METHOD } from "@/types/http";
import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { URLSearchParams } from "url";
import { tokenRequestInterceptor, tokenResponseInterceptor } from "./services/tokenInterceptor";
import { overMaxContentLengthRequestInterceptor } from "./services/overMaxContentLengthInterceptor";
import { addSlashAtEndRequestInterceptor } from "./services/addSlashAtEndInterceptor";

export const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use(addSlashAtEndRequestInterceptor);
axiosInstance.interceptors.request.use(tokenRequestInterceptor);
axiosInstance.interceptors.request.use(overMaxContentLengthRequestInterceptor);
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
  params?: URLSearchParams;
  option?: OPTIONS<RequestDTO>;
}): Promise<AxiosResponse<ResponseDTO>> =>
  axiosInstance.request<ResponseDTO, AxiosResponse<ResponseDTO>, RequestDTO>({
    method,
    url: endpoint,
    data,
    headers,
    params,
    ...option,
  });

export default apiCall;
