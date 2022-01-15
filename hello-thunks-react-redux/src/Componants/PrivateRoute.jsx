import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
}

export default PrivateRoute;
