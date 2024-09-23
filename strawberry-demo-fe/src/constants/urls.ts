import { PAGE_PATH_KEYS } from "./paths";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type API_URL_TYPE = {
  [Key in PAGE_PATH_KEYS]: {
    [SubKey: string]: ((...args: any[]) => string) | string;
  };
};

export const API_URLS: API_URL_TYPE = {
  HERO: {},
  SIGN_IN: {
    //post
    SIGN_IN: `${API_BASE_URL}/user/sign-in`,
  },
  SIGN_UP: {
    //post
    SIGN_UP: `${API_BASE_URL}/user/sign-in`,
  },
  DASHBOARD: {},
  SONG: {
    GET_SONG: (songId) => `${API_BASE_URL}/music/${songId}`,
    GET_SONG_LIST: `${API_BASE_URL}/music/list`,
    UPLOAD_SONG: `${API_BASE_URL}/music/upload`,
  },
  PITCH_LOG: {},
} as const;
