import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import PATHS from "../shared/constants/paths.js";
import { selectedIsAuthenticated } from "../features/auth/selectors.js";

const ProtectedRoute = () => {
  const isAuthed = useSelector(selectedIsAuthenticated);

  if (!isAuthed) {
    console.log("no token");
    return <Navigate to={PATHS.LOGIN.INDEX} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
