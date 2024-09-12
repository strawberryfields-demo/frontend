import { PATHS } from "@/constants/paths";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import HeroPage from "@/pages/HeroPage/HeroPage";
import PitchLogPage from "@/pages/PitchLogPage/PitchLogPage";
import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import SongPage from "@/pages/SongPage/SongPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: PATHS.HERO, element: <HeroPage /> },
  { path: PATHS.SIGN_IN, element: <SignInPage /> },
  { path: PATHS.SIGN_UP, element: <SignUpPage /> },

  // user routes
  { path: PATHS.DASHBOARD, element: <DashboardPage /> },
  { path: PATHS.SONG, element: <SongPage /> },
  { path: PATHS.PITCH_LOG, element: <PitchLogPage /> },
]);
