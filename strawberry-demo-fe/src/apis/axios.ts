import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});
