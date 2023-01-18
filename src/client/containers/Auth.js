import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../reducers/authReducer";

const Auth = () => {
  const dispatch = useDispatch();

  const emailRef = useRef('')
  const passRef = useRef('')

  const verifyUser = (e) => {
    e.preventDefault();
    // fetch('/verifyUser', {
    //   method: "POST",
    //   headers: { 'Content-Type': 'Application/JSON' },
    //   body: JSON.stringify({
    //     email: emailRef.current.value,
    //     pass: passRef.current.value
    //   })
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if (data) {
    //     handleUserLogIn();
    //   }
    // })
    // if (isAuthenticated) {
    dispatch(handleLogin())
    // }
  }

  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            Giftly
          </li>
          <form onSubmit={(e) => verifyUser(e)}>
            <li>
              <input ref={emailRef} type="text" placeholder="username"></input>
            </li>
            <li>
              <input ref={passRef} type="text" placeholder="password"></input>
            </li>
            <li>
              <button>Login</button>
            </li>
          </form>
          <li>
            <button>Signup</button>
          </li>
        </ul>
      </nav>
      <div>
        Enter Image
      </div>
    </div>
  )
}

export default Auth;