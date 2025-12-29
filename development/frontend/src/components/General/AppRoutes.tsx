import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login/Login";
import AppHome from "./AppHome";
import Dashboard from "../Routes/Admin/Dashboard/Dashboard";
import Users from "../Routes/Admin/Users/Users";
import Customers from "../Routes/Admin/Customers/Customers";
import Profile from "../Routes/Profile/Profile";
import Settings from "../Routes/Settings/Settings";
import AuthProvider from "../Providers/AuthProvider";
import { Roles } from "@/types/enums";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<AppHome />} />
      <Route
        path="/dashboard"
        element={
          <AuthProvider roles={[Roles.ADMIN]}>
            <Dashboard />
          </AuthProvider>
        }
      />
      <Route
        path="/users"
        element={
          <AuthProvider roles={[Roles.ADMIN]}>
            <Users />
          </AuthProvider>
        }
      />
      <Route
        path="/customers"
        element={
          <AuthProvider roles={[Roles.ADMIN, Roles.USER]}>
            <Customers />
          </AuthProvider>
        }
      />
      <Route
        path="/profile"
        element={
          <AuthProvider roles={[Roles.ADMIN, Roles.USER]}>
            <Profile />
          </AuthProvider>
        }
      />
      <Route
        path="/settings"
        element={
          <AuthProvider roles={[Roles.ADMIN, Roles.USER]}>
            <Settings />
          </AuthProvider>
        }
      />
    </Routes>
  );
};
export default AppRoutes;
