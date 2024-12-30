/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const [isadmin, isAdminLoading] = useAdmin();
  const { user, loading } = useContext(AuthContext);
  if (loading && isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isadmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
