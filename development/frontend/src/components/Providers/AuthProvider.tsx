import { Navigate } from "react-router-dom";
import { decodeToken } from "@/utils/auth";
import { Roles } from "@/types/enums";
import AppAccessDeniedUI from "../General/AppAccessDeniedUI";

type Props = {
  children: React.ReactNode;
  roles?: Roles[];
};

const AuthProvider = ({ children, roles }: Props) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const decodedToken = decodeToken(token);

  if (!decodedToken) {
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(decodedToken.Role as Roles)) {
    return <AppAccessDeniedUI />;
  }

  return <>{children}</>;
};

export default AuthProvider;
