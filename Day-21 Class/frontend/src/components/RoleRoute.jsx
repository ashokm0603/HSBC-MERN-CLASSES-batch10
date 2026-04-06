import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const RoleRoute = ({ children, roles }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" />;
  }
  
  const user = jwtDecode(token);
  return roles.includes(user.role) ? children : <Navigate to="/unauthorized" />;
};

export default RoleRoute;
