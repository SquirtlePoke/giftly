import { createSlice } from "@reduxjs/toolkit"

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    collections: [],
  },
  reducers: {
    updateCollection: (state, action) => { 
      state.collections = action.payload;
    },
  },
});

export const { updateCollection } = collectionsSlice.actions;

export default collectionsSlice.reducer;