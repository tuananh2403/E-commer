import axios from "../axios";
export const apiCreateOder = () =>
  axios({
    url: "/order/",
    method: "post",
  });
export const apiOder = () =>
  axios({
    url: "/order/",
    method: "get",
  });
