import React, { useRef } from "react";

const Auth = () => {
  const emailRef = useRef('')
  const passRef = useRef('')

  const verifyUser = (e) => {
    e.target.value;
  }



  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li>
            Giftly
          </li>
          <form onSubmit={() => verifyUser()}>
            <li>
              <input ref={emailRef} type="text" placeholder="username"></input>
            </li>
            <li>
              <input ref={passRef} type="text" placeholder="password"></input>
            </li>
          </form>
          <li>
            <button>Login</button>
          </li>
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