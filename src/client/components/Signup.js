import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthenticated } from "../reducers/authReducer";
import { toggleLogin } from "../reducers/authReducer"

const Login = () => {
  const { login } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const emailRef = useRef('')
  const passRef = useRef('')
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')

  const createUser = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value)
    console.log(passRef.current.value)
    console.log(firstNameRef.current.value)
    console.log(lastNameRef.current.value)
    fetch('/users/signup', {
      method: "POST",
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({
        username: emailRef.current.value,
        password: passRef.current.value,
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data, "DATA")
      if (data.username) {
        console.log(data.username);
        dispatch(updateAuthenticated(true))
      }
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input ref={emailRef} type="text" placeholder="E-mail" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input ref={passRef} type="password" placeholder="Password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input ref={firstNameRef} type="text" placeholder="First Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input ref={lastNameRef} type="text" placeholder="Last Name" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button onClick={(e) => createUser(e)} className="btn btn-primary">Signup</button>  
              </div>
              <div>
                <button className="w-full text-center text-sm" onClick={() => dispatch(toggleLogin(true))}>
                { login ? "Switch to Signup" : "Switch to Login" }
                </button>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;