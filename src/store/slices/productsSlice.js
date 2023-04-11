import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunk/fetchProducts";

const initialState = {
  isLoding: false,
  productList: [],
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default productsSlice.reducer;
