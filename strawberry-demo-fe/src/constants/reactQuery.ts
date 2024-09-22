import { getReactQueryKeysFromURL } from "@/utils/reactQueryUtils";
import { PAGE_PATH_KEYS } from "./paths";
import { API_URLS } from "./urls";

// Query Key 타입 정의
type QUERY_KEY_TYPE = {
  [Key in PAGE_PATH_KEYS]: {
    [SubKey: string]: ((...args: any[]) => string[]) | string[];
  };
};

export const QUERY_KEYS: QUERY_KEY_TYPE = {
  HERO: {},
  SIGN_IN: {
    SIGN_IN: getReactQueryKeysFromURL(API_URLS["SIGN_IN"]["SIGN_IN"] as string),
  },
  SIGN_UP: {
    SIGN_UP: getReactQueryKeysFromURL(API_URLS["SIGN_UP"]["SIGN_UP"] as string),
  },
  DASHBOARD: {},
  SONG: {
    GET_SONG: (songId: string) =>
      getReactQueryKeysFromURL((API_URLS["SONG"]["GET_SONG"] as (id: string) => string)(songId)),
    GET_SONG_LIST: getReactQueryKeysFromURL(API_URLS["SONG"]["GET_SONG_LIST"] as string),
  },
  PITCH_LOG: {},
};
