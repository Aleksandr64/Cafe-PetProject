import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentAccessToken } from "../../redux/auth/authSlice";

const RequireAuth = () => {
  const token = useSelector(selectCurrentAccessToken);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/accountPage" state={{ from: location }} replace />
  );
};
export default RequireAuth;
