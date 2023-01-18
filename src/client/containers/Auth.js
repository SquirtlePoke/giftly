import React, { useRef } from "react";

const Auth = () => {

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
          <li>
            <input onChange={(e) => verifyUser(e)} type="text" placeholder="username"></input>
          </li>
          <li>
            <input onChange={(e) => verifyUser(e)} type="text" placeholder="password"></input>
          </li>
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