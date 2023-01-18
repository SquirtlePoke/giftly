import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount
} from "../reducers/counterReducer.js";

const HomeView = () => {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>HomeView</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
      <h2>Counter value: {value}</h2>
    </>
  );
};

export default HomeView;