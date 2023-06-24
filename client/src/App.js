import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Home,
  Public,
  DetailProduct,
  Blogs,
  FAQ,
  Services,
  Products,
  Register,
  ForgotPassword,
  ResetPassword,
} from "./pages/public";

import {
  AdminLayout,
  ManageOrder,
  ManageProducts,
  ManageUser,
  CreateProduct,
  Dashboard,
} from "./pages/admin";
import { MemberLayout, Personal } from "./pages/member";
import path from "./ultils/path";
import { getCategories } from "./store/app/asyncAction";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/product/asyncAction";
import ListDetailProduct from "./pages/public/listProductCategory";
import { Introduct, OrderProduct, PayProduct } from "./components";
import { getCurrent } from "./store/user/asyncAction";
import { getCart } from "./store/order/asyncAction";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getCurrent());
    dispatch(getCart());
  }, []);
  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.PRODUCTS} element={<Products />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.BLOGS} element={<Blogs />} />
          <Route
            path={path.DETAIL_PRODUCT_PID_TITLE}
            element={<DetailProduct />}
          />
          <Route
            path={path.LIST_DETAIL_PRODUCT_PID_TITLE}
            element={<ListDetailProduct />}
          />
          <Route path={path.FAQS} element={<FAQ />} />
          <Route path={path.SERVICE} element={<Services />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.FORGOTPASSWORD} element={<ForgotPassword />} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={path.INTRODUCTION} element={<Introduct />} />
          <Route path={path.CART} element={<OrderProduct />} />
          <Route path={path.PAY} element={<PayProduct />} />
          <Route path={path.ALL} element={<Home />} />
        </Route>
        <Route path={path.ADMIN} element={<AdminLayout />}>
          <Route path={path.DASHBOARD} element={<Dashboard />} />
          <Route path={path.CREATE_PRODUCT} element={<CreateProduct />} />
          <Route path={path.MANAGE_ORDER} element={<ManageOrder />} />
          <Route path={path.MANAGE_PRODUCT} element={<ManageProducts />} />
          <Route path={path.MANAGE_USER} element={<ManageUser />} />
        </Route>
        <Route path={path.MEMBER} element={<MemberLayout />}>
          <Route path={path.PERSONAL} element={<Personal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
