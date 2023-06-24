import axios from "../axios";

export const apiGetProducts = (params) =>
  axios({
    url: "/product/",
    method: "get",
    params,
  });
export const apiGetListProducts = () =>
  axios({
    url: "/product/",
    method: "get",
  });

export const apiGetProduct = (pid) =>
  axios({
    url: "/product/" + pid,
    method: "get",
  });
export const apiGetCart = () =>
  axios({
    url: "/order/",
    method: "get",
  });
