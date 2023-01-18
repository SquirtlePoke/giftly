import React, { useState } from "react";
import Auth from "../containers/Auth"
import Dashboard from "../containers/Dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../reducers/counterReducer.js"


const App = () => {
  const { value } = useSelector((state) => state.counter)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      { isAuthenticated ? <Dashboard/> : <Auth/> }
      <h1>App</h1>
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
      <h2>Counter value: {value}</h2>
    </BrowserRouter>
  );
};

export default App;
