import React, { useEffect, useState } from "react";
import { apiDistrict, apiProvince, apiWard } from "../apis";
import { apiGetProduct } from "../apis/product";
import { useSelector } from "react-redux";
import { formatMoney } from "../ultils/helper";
import { Link } from "react-router-dom";
import path from "../ultils/path";
import SelectAddress from "./SelectAddress";

const PayProduct = () => {
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState();

  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState();

  const [wards, setWards] = useState([]);
  const [ward, setWard] = useState();

  const [add, setAdd] = useState();

  const [productPay, setProductPay] = useState([]);
  const [total, setTotal] = useState();
  const [reset, setReset] = useState(false);
  const { isLoggedIn } = JSON.parse(localStorage.getItem("persist:shop/user"));
  const { cart } = useSelector((state) => state.cart);
  const handleProductPay = async () => {
    if (cart) {
      const productPay = cart[0].products;
      const total = cart[0].total;
      setTotal(total);
      const listProductPay = productPay.map(async (product) => {
        const response = await apiGetProduct(product.product);
        return {
          product: response.productData,
          quantity: product.count,
          totalItem: product.totalItem,
        };
      });
      if (listProductPay) {
        const rs = await Promise.all(listProductPay);
        // console.log(rs);
        setProductPay(rs);
      }
    }
  };
  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiProvince();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchPublicProvince();
  }, []);
  useEffect(() => {
    setWard(null);
    const fetchPublicWard = async () => {
      const response = await apiWard(district);
      if (response.status === 200) {
        setWards(response?.data.results);
      }
    };
    district && fetchPublicWard();
    !district ? setReset(true) : setReset(false);
    !province ? setReset(true) : setReset(false);
    setWards([]);
  }, [province, district]);

  useEffect(() => {
    setDistrict(null);
    const fetchPublicDistrict = async () => {
      const response = await apiDistrict(province);
      if (response.status === 200) {
        setDistricts(response?.data.results);
      }
    };
    province && fetchPublicDistrict();
    !province ? setReset(true) : setReset(false);
    !province && setDistricts([]);
  }, [province]);
  console.log({ province, district, ward });
  useEffect(() => {
    handleProductPay();
  }, [cart]);
  const handlePay = () => {
    console.log("anh");
  };
  return (
    <div className="bg-white p-5">
      <h1 className="text-[26px] font-semibold border-b-2 mb-3">Thanh toán</h1>
      <div className="grid grid-cols-2 gap-4">
        {isLoggedIn == '"true"' ? (
          <div className="mt-4">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Họ Và Tên
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Số Điện Thoại
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <SelectAddress
                  type="province"
                  value={province}
                  setValue={setProvince}
                  options={provinces}
                  label="Tinh/ Thành Phố"
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <SelectAddress
                  reset={reset}
                  type="district"
                  value={district}
                  setValue={setDistrict}
                  options={districts}
                  label="Quận/ Huyện"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <SelectAddress
                  type="ward"
                  value={ward}
                  setValue={setWard}
                  options={wards}
                  label="Phường/ Xã"
                />
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  onChange={(e) => setAdd(e.target.value)}
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Địa chỉ (số Nhà - Đường - Thôn -Xóm)
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                readOnly
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                value={`${add ? `${add},` : ""}  ${
                  ward
                    ? `${
                        wards?.find((item) => item.ward_id === ward)?.ward_name
                      }, `
                    : ""
                }${
                  district
                    ? `${
                        districts?.find((item) => item.district_id === district)
                          ?.district_name
                      },`
                    : ""
                } ${
                  province
                    ? `${
                        provinces?.find((item) => item.province_id === province)
                          ?.province_name
                      }`
                    : ""
                } `}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Địa chỉ
              </label>
            </div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              onClick={() => handlePay()}
            >
              Thanh Toán
            </button>
          </div>
        ) : (
          ""
        )}
        <div>
          <div className="flex justify-between ">
            <h1 className="font-semibold text-[20px]">Đơn Hàng</h1>
            <Link to={`/${path.CART}`} className=" text-[14px]">
              Chỉnh Sửa
            </Link>
          </div>

          <div class="relative overflow-x-auto mb-3">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    STT
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tên Sản phẩm
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Đơn Giá
                  </th>
                  <th scope="col" class="px-6 py-3">
                    SL
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Thành Tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {productPay?.map((el, value) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {value + 1}
                    </th>
                    <td class="px-6 py-4">{el.product.title}</td>
                    <td class="px-6 py-4">
                      {formatMoney(el.product.price)} VND
                    </td>
                    <td class="px-6 py-4">{el.quantity}</td>
                    <td class="px-6 py-4">{formatMoney(el.totalItem)} VND</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className="font-semibold flex justify-end text-[20px]">
            Tổng Tiền :{" "}
            <span className="text-red-600"> {formatMoney(total)} VND</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PayProduct;
