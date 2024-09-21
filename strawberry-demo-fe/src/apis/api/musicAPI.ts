import { API_URLS } from "@/constants/urls";
import { MusicUploadRequestDTO, MusicUploadResponseDTO } from "../dtos/musicDto";
import apiCall from "../axios";
import { AxiosHeaders } from "axios";

const { UPLOAD_SONG } = API_URLS.SONG;

export const uploadSongMetaDataAndGetS3URL = async (data: MusicUploadRequestDTO) =>
  await apiCall<MusicUploadRequestDTO, MusicUploadResponseDTO>({
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

export const uploadSongToS3ParallelAPI = async (data: File[], s3Endpoints: string[]) =>
  await Promise.all(
    s3Endpoints.map((url, index) => {
      return uploadSongToS3API(data[index], url);
    }),
  );
