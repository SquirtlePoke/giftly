import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthRequired() {
  const { isAuthenticated, isAuthorized } = useSelector((state) => state.auth);
  return (
    <>
      {(!isAuthenticated) && <Navigate to="/" replace={true} />}
    </>
  );
}
