import { getAccessToken } from "@/lib/authStorage";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
