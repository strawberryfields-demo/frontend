import { InternalAxiosRequestConfig } from "axios";

// django rest framework에서 url이 /로 끝나지 않으면 제대로 경로를 찾지 못하는 오류가 있습니다.
export const addSlashAtEndRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.url && !config.url.endsWith("/")) {
    config.url += "/";
  }

  return config;
};
