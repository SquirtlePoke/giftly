import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import collectionsReducer from "./reducers/collectionsReducer.js";
import itemsReducer from "./reducers/itemsReducer.js";
import userReducer from "./reducers/userReducer";

const store = configureStore({ 
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
    items: itemsReducer,
    user: userReducer
  },
 });

export default store;
