import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ForbiddenError, UnauthorizedError } from "../errors";

export const tokenRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.url && new URL(config.url).origin !== import.meta.env.VITE_API_BASE_URL) return config;

  //TODO: Zustand로 변경
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

export const tokenResponseInterceptor = {
  response: (response: AxiosResponse) => {
    return response;
  },
  error: (error: any) => {
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
};
