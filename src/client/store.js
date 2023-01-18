import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer.js";
import authReducer from "./reducers/authReducer.js";

const store = configureStore({ 
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
 });

export default store;
