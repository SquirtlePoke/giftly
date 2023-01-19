import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: true, // ! Temporarily true for testing purposes
    isAuthorized: false,
    login: true,
  },
  reducers: {
    updateAuthenticated: (state, action) => { 
      state.isAuthenticated = action.payload;
    },
    updateAuthorized: (state, action) => { 
      state.isAuthorized = action.payload;
    },
    toggleLogin: (state, action) => {
      state.login = action.payload
    }
  },
});

export const { updateAuthenticated, updateAuthorized, toggleLogin } = authSlice.actions;

export default authSlice.reducer;