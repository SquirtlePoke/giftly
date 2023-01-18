import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import collectionsReducer from "./reducers/collectionsReducer.js";
import counterReducer from "./reducers/counterReducer.js";

const store = configureStore({ 
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    collections: collectionsReducer,
  },
 });

export default store;
