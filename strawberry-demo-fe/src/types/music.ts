export type Music = {
  id: string;
  name: string;
  artist: string;
  album?: string;
  duration: number;
  genre?: string;
  releaseDate: string;
  musicUrl: string;
};

export type AllowedMusicExtension = "mp3" | "wav";
