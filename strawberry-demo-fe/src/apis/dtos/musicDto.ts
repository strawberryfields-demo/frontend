import { AllowedMusicExtension } from "@/types/music";
import { PaginationDto } from "./pagination";
import { S3PresignedPostResponse } from "./s3Dto";

export interface MusicResponseDTO {
  id: string;
  name: string;
  artist: string;
  album?: string;
  duration: number;
  genre?: string;
  releaseDate: string;
  musicUrl: string;
}

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
