export type Music = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  genre?: string;
  releaseDate: string;
  file_path: string;
};

export type AllowedMusicExtension = "mp3" | "wav";
