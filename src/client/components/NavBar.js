import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <nav>
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
          navigate("/items");
        }}
      >
        Items
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
      <button
        onClick={() => {
          navigate("/secret");
        }}
      >
        Secret
      </button>
    </nav>
  );
};

export default NavBar;
