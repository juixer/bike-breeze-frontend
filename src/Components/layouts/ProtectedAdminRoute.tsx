import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

const ProtectedAdminRoute = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch()
  const token = useAppSelector(useCurrentToken);
  const location = useLocation();

  if (!token) {
    dispatch(logOut())

    return <Navigate state={location.pathname} to={"/login"} replace={true} />;
  }
  const user = verifyToken(token as string) as TUser;

  if (user.role !== "admin" && user.role !== "superAdmin") {
    dispatch(logOut())

    return <Navigate state={location.pathname} to={"/login"} replace={true} />;
  }

  return <>{children}</>;
};
export default ProtectedAdminRoute;
