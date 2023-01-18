import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateAuthenticated } from "../reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  const emailRef = useRef('')
  const passRef = useRef('')

  const verifyUser = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: "POST",
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({
        username: emailRef.current.value,
        password: passRef.current.value
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.username) {
        console.log(data.username);
        dispatch(updateAuthenticated(true))
      }
    })
  }

  return (
    <div>
      <form onSubmit={(e) => verifyUser(e)}>
        <input ref={emailRef} type="text" placeholder="Username"></input>
        <input ref={passRef} type="text" placeholder="Password"></input>
        <button>Login</button>
      </form>    
    </div>
  )
}

export default Login;