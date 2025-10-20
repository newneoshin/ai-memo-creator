import { createBrowserRouter } from "react-router-dom";

import PATHS from "../shared/constants/paths.js";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX,
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: PATHS.LOGIN.INDEX,
    children: [{ index: true, Component: LoginPage }],
  },
  {
    path: PATHS.SIGNUP.INDEX,
    children: [{ index: true, Component: SignUpPage }],
  },
]);

export default router;
