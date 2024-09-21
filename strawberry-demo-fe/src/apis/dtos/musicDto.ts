import { AllowedMusicExtension } from "@/types/music";
import { PaginationDto } from "./pagination";

export interface MusicResponseAPI {
  id: string;
  name: string;
  artist: string;
  album?: string;
  duration: number;
  genre?: string;
  releaseDate: string;
  musicUrl: string;
}

export interface MusicListResponseAPI extends PaginationDto<MusicResponseAPI> {}

export interface MusicUploadRequestAPI {
  music_metadatas: MusicMetaData[];
}

export interface MusicUploadResponseAPI {
  s3_urls: string[];
}

export interface MusicMetaData {
  name: string;
  size: number;
  extension: AllowedMusicExtension;
}
