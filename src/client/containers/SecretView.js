import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateAuthenticated,
  updateAuthorized
} from "../reducers/authReducer.js";

import AuthRequired from "./AuthRequired";
import AddCollectionForm from "../components/AddCollectionForm"

export default function LoginView() {
  const { isAuthenticated, isAuthorized } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <AuthRequired />
      <h1>SecretView</h1>
      <AddCollectionForm />
    </>
  );
}
