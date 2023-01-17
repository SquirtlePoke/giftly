import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "../reducers/counterReducer.js"


const App = () => {
  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
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
