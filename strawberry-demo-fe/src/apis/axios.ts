import { ENDPOINT, HTTP_METHOD } from "@/types/http";
import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ForbiddenError, UnauthorizedError } from "./errors";

export const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  //TODO: Zustand로 변경
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response?.status) {
      case 401: {
        //TODO: Zustand로 변경
        localStorage.removeItem("accessToken");
        return Promise.reject(new UnauthorizedError(error));
      }
      case 403: {
        return Promise.reject(new ForbiddenError(error));
      }
      default:
        return Promise.reject(error);
    }
  },
);

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
