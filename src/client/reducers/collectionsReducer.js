import { createSlice } from "@reduxjs/toolkit"

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    collections: [],
  },
  reducers: {
    update: (state, action) => { 
      state.collections = action.payload;
    },
  },
});

export const { update } = collectionsSlice.actions;

export default collectionsSlice.reducer;