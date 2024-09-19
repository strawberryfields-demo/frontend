import { PAGE_PATHS } from "@/constants/paths";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import HeroPage from "@/pages/HeroPage/HeroPage";
import PitchLogPage from "@/pages/PitchLogPage/PitchLogPage";
import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import SongPage from "@/pages/SongPage/SongPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: PAGE_PATHS.HERO, element: <HeroPage /> },
  { path: PAGE_PATHS.SIGN_IN, element: <SignInPage /> },
  { path: PAGE_PATHS.SIGN_UP, element: <SignUpPage /> },

  // user routes
  { path: PAGE_PATHS.DASHBOARD, element: <DashboardPage /> },
  { path: PAGE_PATHS.SONG, element: <SongPage /> },
  { path: PAGE_PATHS.PITCH_LOG, element: <PitchLogPage /> },
]);
