import React, { useRef, useState } from "react";
import Login from "../components/Login"
import Signup from "../components/Signup"
import { useDispatch } from "react-redux";
import { updateAuthenticated } from "../reducers/authReducer";

const Auth = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      { login ? <Login/> : <Signup/>}
      <button className="btn btn-primary" onClick={() => {
        (login) ? setLogin(false) : setLogin(true);
        }}>
        {login ? "Signup" : "Login"}
      </button>
    </>
  )
}

export default Auth;