import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import collectionsReducer from "./reducers/collectionsReducer.js";

const store = configureStore({ 
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
  },
 });

export default store;
