import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";
export const getProducts = createAsyncThunk(
  "product/products",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiGetProducts({ sort: "-sold" });
    if (!response.success) return rejectWithValue(response);
    return response.productsData;
  }
);
