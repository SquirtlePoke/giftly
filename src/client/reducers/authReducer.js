import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false
}

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state) => {
      state.isAuthenticated = true;
    }
  }
})

export const { handleLogin } = authReducer.actions;
export default authReducer.reducer;