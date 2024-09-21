import { API_URLS } from "@/constants/urls";
import { MusicUploadRequestAPI, MusicUploadResponseAPI } from "../dtos/musicDto";
import apiCall from "../axios";
import { AxiosHeaders } from "axios";

const { UPLOAD_SONG } = API_URLS.SONG;

export const uploadSongMetaDataAndGetS3URL = async (data: MusicUploadRequestAPI) =>
  await apiCall<MusicUploadRequestAPI, MusicUploadResponseAPI>({
    method: "POST",
    endpoint: UPLOAD_SONG as string,
    data,
  });

export const uploadSongToS3API = async (data: File, s3Endpoint: string) =>
  await apiCall({
    method: "PUT",
    endpoint: s3Endpoint,
    data,
    headers: new AxiosHeaders({
      "Content-Type": data.type,
    }),
  });
