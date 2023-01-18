import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/collections");
        }}
      >
        Collections
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Log In
      </button>
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign Up
      </button>
    </>
  );
};

export default NavBar;
