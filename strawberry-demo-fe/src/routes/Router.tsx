import { PATHS } from "@/constants/paths";
import HeroPage from "@/pages/HeroPage/HeroPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: PATHS.HERO, element: <HeroPage /> },
  { path: PATHS.SIGN_IN, element: <HeroPage /> },
  { path: PATHS.SIGN_UP, element: <HeroPage /> },
  { path: PATHS.SONG, element: <HeroPage /> },
  { path: PATHS.PITCH_LOG, element: <HeroPage /> },
]);
