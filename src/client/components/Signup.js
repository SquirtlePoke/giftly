import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateAuthenticated } from "../reducers/authReducer";

const Login = () => {
  const dispatch = useDispatch();

  const emailRef = useRef('')
  const passRef = useRef('')
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')

  const createUser = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({
        username: emailRef.current.value,
        password: passRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value
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
      <form onSubmit={(e) => createUser(e)}>
        <input ref={emailRef} type="text" placeholder="E-mail"></input>
        <input ref={passRef} type="text" placeholder="Password"></input>
        <input ref={firstNameRef} type="text" placeholder="First Name"></input>
        <input ref={lastNameRef} type="text" placeholder="Last Name"></input>
        <button className="btn">Login</button>
      </form>    
    </div>
  )
}

export default Login;