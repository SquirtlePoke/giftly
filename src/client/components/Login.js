import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAuthenticated } from "../reducers/authReducer";
import { updateUserId } from "../reducers/userReducer";
import { toggleLogin } from "../reducers/authReducer"

const Login = () => {
  const { login } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef('')
  const passRef = useRef('')

  const verifyUser = async (e) => {
    e.preventDefault();
    const data = await fetch('/users/login', {
      method: "POST",
      headers: { 'Content-Type': 'Application/JSON' },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passRef.current.value
      })
    })
    if (data.status === 200) {
      dispatch(updateUserId(11))
      dispatch(updateAuthenticated(true))
      navigate("/collections")
    }
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
                    <span className="label-text">Username</span>
                  </label>
                  <input ref={usernameRef} type="text" placeholder="Username" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input ref={passRef} type="password" placeholder="Password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                  <button onClick={(e) => verifyUser(e)} className="btn btn-primary">Login</button>  
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