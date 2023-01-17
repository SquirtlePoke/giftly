import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer.js";

const store = configureStore({ 
  reducer: rootReducer,
 });

export default store;
