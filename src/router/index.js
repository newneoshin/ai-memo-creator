import { createBrowserRouter } from "react-router-dom";

import PATHS from "../shared/constants/paths.js";

import ProtectedRoute from "./ProtectedRoute";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import TodosPage from "../pages/TodosPage";
import AddTodoPage from "../pages/AddTodoPage";

const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX,
    children: [{ index: true, Component: HomePage }],
  },

  {
    path: PATHS.AUTH.INDEX,
    children: [
      { path: PATHS.AUTH.LOGIN, Component: LoginPage },
      { path: PATHS.AUTH.SIGNUP, Component: SignUpPage },
    ],
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
    path: PATHS.MEMO.INDEX,
    Component: ProtectedRoute,
    children: [
      { index: true, Component: TodosPage },
      { path: PATHS.MEMO.ADD, Component: AddTodoPage },
    ],
  },
]);

export default router;
