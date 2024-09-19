import { ENDPOINT, HTTP_METHOD } from "@/types/http";
import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});
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
