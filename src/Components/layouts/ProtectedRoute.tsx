import { ReactNode } from "react";
import { logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch()
  const location = useLocation();

  const token = useAppSelector(useCurrentToken) as string;
  if (!token) {
    dispatch(logOut())
    return <Navigate state={location.pathname} to={"/login"} replace={true} />;
  }

  return <>{children}</>;
};
export default ProtectedRoute;
