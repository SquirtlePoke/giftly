import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserId: (state, action) => {
      state.userId = action.payload
    }
  }
}) 

export const { updateUserId } = userSlice.actions;
export default userSlice.reducer