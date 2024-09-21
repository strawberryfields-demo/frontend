import { API_URLS } from "@/constants/urls";
import { MusicUploadRequestDTO, MusicUploadResponseDTO } from "../dtos/musicDto";
import apiCall from "../axios";
import { AxiosHeaders } from "axios";
import { S3PresignedPostResponse } from "../dtos/s3Dto";

const { UPLOAD_SONG } = API_URLS.SONG;

export const uploadSongMetaDataAndGetS3URL = async (data: MusicUploadRequestDTO) =>
  await apiCall<MusicUploadRequestDTO, MusicUploadResponseDTO>({
    method: "POST",
    endpoint: UPLOAD_SONG as string,
    data,
  });

export const uploadSongToS3API = async (file: File, s3PresignedPostResponse: S3PresignedPostResponse) =>
  await apiCall({
    method: "POST",
    endpoint: s3PresignedPostResponse.url,
    data: {
      ...s3PresignedPostResponse.fields,
      file,
    },
    headers: new AxiosHeaders({
      "Content-Type": "multipart/form-data",
    }),
  });

export const uploadSongToS3ParallelAPI = async (data: File[], s3PresignedPostResponses: S3PresignedPostResponse[]) =>
  await Promise.all(
    s3PresignedPostResponses.map((s3PresignedPostResponse, index) =>
      uploadSongToS3API(data[index], s3PresignedPostResponse),
    ),
  );
