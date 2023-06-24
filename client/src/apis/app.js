import axios from "../axios";
import axiosDefault from "axios";
export const apiGetCategories = () =>
  axios({
    url: "/productcategory",
    method: "get",
  });
export const apiProvince = () =>
  axiosDefault({
    url: "https://vapi.vnappmob.com/api/province/",
    method: "get",
  });

export const apiDistrict = (provinceId) =>
  axiosDefault({
    url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
    method: "get",
  });
export const apiWard = (districtId) =>
  axiosDefault({
    url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
    method: "get",
  });
