import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateAuthenticated, updateAuthorized } from "../reducers/authReducer.js";

export default function LoginView() {
  const { isAuthenticated, isAuthorized } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <br></br>
      Is Authenticated? {`${isAuthenticated}`}
      <button onClick={() => dispatch(updateAuthenticated(!isAuthenticated))}>
        Toggle Authentication
      </button>
      <br></br>
      Is Authorized? {`${isAuthorized}`}
      <button onClick={() => dispatch(updateAuthorized(!isAuthorized))}>
        Toggle Authentication
      </button>
    </>
  );
}
