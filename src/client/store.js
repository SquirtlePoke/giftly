import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import collectionsReducer from "./reducers/collectionsReducer.js";
import userReducer from "./reducers/userReducer";

const store = configureStore({ 
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
    user: userReducer
  },
 });

export default store;
