import { createAsyncThunk } from "@reduxjs/toolkit";

import { ENV } from "../../utils/env";

const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PRODUCTS}/`;
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, params);
  const result = await response.json();

  if (response.status !== 200) throw result;

  return result.results;
});


const fetchProductsLanding = createAsyncThunk("productslanding/fetch", async () => {
  const url = `${ENV.BASE_API}/${ENV.API_ROUTES.PRODUCTS}/?variant=Landing`;
  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, params);
  const result = await response.json();

  if (response.status !== 200) throw result;

  return result.results;
});

export { fetchProducts, fetchProductsLanding };
