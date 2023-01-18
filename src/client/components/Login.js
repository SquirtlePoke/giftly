import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthenticated } from "../reducers/authReducer";
import { toggleLogin } from "../reducers/authReducer"

const Login = () => {
  const { login } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  const emailRef = useRef('')
  const passRef = useRef('')

  const verifyUser = (e) => {
    e.preventDefault();
    fetch('/users/login', {
      method: "POST",
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({
        username: emailRef.current.value,
        password: passRef.current.value
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
      <form onSubmit={(e) =>verifyUser(e)}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input ref={emailRef} type="text" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input ref={passRef} type="text" placeholder="Password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>  
                </div>
                <div>
                  <button className="w-full text-center text-sm" onClick={() => dispatch(toggleLogin(false))}>
                  { login ? "Switch to Signup" : "Switch to Login" }
                  </button>              
                </div>
              </div>
            </div>
          </div>
        </div>
    </form>
  </div>
  )
}

export default Login;