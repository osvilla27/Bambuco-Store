import { createSlice } from "@reduxjs/toolkit";
import { fetchLandings } from "../thunk/fetchLandings";

const initialState = {
  isLoding: false,
  landingList: [],
  error: null,
};

const landingsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLandings.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchLandings.fulfilled, (state, action) => {
      state.landingList = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchLandings.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default landingsSlice.reducer;
