import { PAGE_PATHS } from "./paths";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type PAGE_PATH_KEYS = keyof typeof PAGE_PATHS;
type API_URL_TYPE = {
  [Key in PAGE_PATH_KEYS]: {
    [SubKey: string]: string;
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
  SONG: {},
  PITCH_LOG: {},
} as const;
