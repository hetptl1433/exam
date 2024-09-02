import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists in localStorage

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
