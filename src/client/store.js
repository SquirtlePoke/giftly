import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer.js";
import collectionsReducer from "./reducers/collectionsReducer.js";

const store = configureStore({ 
  reducer: {
    counter: counterReducer,
    collections: collectionsReducer,
  },
 });

export default store;
