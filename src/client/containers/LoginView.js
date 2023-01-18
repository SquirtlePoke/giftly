import React from "react";
import Login from "../components/Login"
import Signup from "../components/Signup"
import { useSelector } from "react-redux";

const Auth = () => {
  const { login } = useSelector(state => state.auth)

  return (
    <>
      { login ? <Login/> : <Signup/>}
    </>
  )
}

export default Auth;