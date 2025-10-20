import { createBrowserRouter } from "react-router-dom";

import PATHS from "../shared/constants/paths.js";

import ProtectedRoute from "./ProtectedRoute";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import TodosPage from "../pages/TodosPage";

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
  {
    path: PATHS.TODOS.INDEX,
    Component: ProtectedRoute,
    children: [{ index: true, Component: TodosPage }],
  },
]);

export default router;
