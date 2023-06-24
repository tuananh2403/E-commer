import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import storage from "redux-persist/lib/storage";
import userSlice from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import productSlice from "./product/productSlice";
import orderSlice from "./order/orderSlice";

const commonConfig = {
  key: "shop/user",
  storage,
};
const userConfig = {
  ...commonConfig,
  whitelist: ["isLoggedIn", "token", "current"],
};
export const store = configureStore({
  reducer: {
    app: appSlice,
    products: productSlice,
    user: persistReducer(userConfig, userSlice),
    product: userSlice,
    cart: orderSlice,
  },
});

export const persistor = persistStore(store);
