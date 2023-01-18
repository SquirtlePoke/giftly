import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isAuthorized: false,
  },
  reducers: {
    updateAuthenticated: (state, action) => { 
      state.isAuthenticated = action.payload;
    },
    updateAuthorized: (state, action) => { 
      state.isAuthorized = action.payload;
    },
  },
});

export const { updateAuthenticated, updateAuthorized } = authSlice.actions;

export default authSlice.reducer;