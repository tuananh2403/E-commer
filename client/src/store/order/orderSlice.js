import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
export const orderSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(actions.getCart.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(actions.getCart.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store

      state.isLoading = false;
      state.cart = action.payload;
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(actions.getCart.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store

      state.isLoading = false;
      state.cart = null;
    });
  },
});
export const {} = orderSlice.actions;
export default orderSlice.reducer;
