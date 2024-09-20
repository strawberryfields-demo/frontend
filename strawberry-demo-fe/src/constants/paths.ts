export const PAGE_PATHS = {
  HERO: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  DASHBOARD: "/dashboard",
  SONG: "/song",
  PITCH_LOG: "/pitch-log",
} as const;

export type PAGE_PATH_KEYS = keyof typeof PAGE_PATHS;
