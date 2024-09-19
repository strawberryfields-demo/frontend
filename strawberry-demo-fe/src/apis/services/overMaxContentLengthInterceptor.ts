import { ContentLengthExceededError } from "./../errors/contentLengthExceededError";
import { MAX_CONTENT_LENGTH } from "@/constants/https";
import { InternalAxiosRequestConfig } from "axios";

export const overMaxContentLengthRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.data && config.data instanceof Blob && config.data.size > MAX_CONTENT_LENGTH) {
    return Promise.reject(new ContentLengthExceededError(config.data.size));
  }

  return config;
};
