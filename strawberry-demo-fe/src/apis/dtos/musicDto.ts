import { AllowedMusicExtension } from "@/types/music";
import { PaginationDto } from "./paginationDto";
import { S3PresignedPostResponse } from "./s3Dto";

export interface MusicResponseDTO {
  id: string;
  title: string;
  file_path: string;
}

export interface MusicListRequestDTO {}
export interface MusicListResponseDTO extends PaginationDto<MusicResponseDTO> {}

export interface MusicUploadRequestDTO {
  music_metadatas: MusicMetaData[];
}

export interface MusicUploadResponseDTO {
  s3_urls: S3PresignedPostResponse[];
}

export interface MusicUploadResponseErrorDTO {}

export interface MusicUploadToS3RequestDTO extends S3PresignedPostResponse {
  file: File;
}
export interface MusicUploadToS3ResponseDTO {}
export interface MusicUploadToS3ResponseErrorDTO {}

export interface MusicMetaData {
  name: string;
  size: number;
  extension: AllowedMusicExtension;
}
