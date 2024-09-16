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
