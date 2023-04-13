import { createAsyncThunk } from "@reduxjs/toolkit";

import { ENV } from "../../utils/env";

const fetchLandings = createAsyncThunk("landings/fetch", async () => {
  const url = `${ENV.BASE_API}/${ENV.API_ROUTES.LANDINGS}/`;
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

export { fetchLandings };
