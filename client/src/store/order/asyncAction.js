import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";
export const getCart = createAsyncThunk(
  "cart/products",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiGetCart();
    if (!response.success) return rejectWithValue(response);
    return response.response;
  }
);
