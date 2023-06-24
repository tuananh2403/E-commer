import React, { useEffect, useState } from "react";
import { apiGetProduct, apiOder } from "../apis";
import { useSelector } from "react-redux";
import { formatMoney } from "../ultils/helper";
import { Link, useNavigate } from "react-router-dom";
import path from "../ultils/path";
import { apiCreateOder } from "../apis/oder";

const OrderProduct = () => {
  const [products, setProducts] = useState([]);

  const { current } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const fetchProduct = async () => {
    if (current) {
      const listOder = current.cart.map(async (product) => {
        const response = await apiGetProduct(product.product);
        return {
          product: response.productData,
          quantity: product.quantity,
          total: product.quantity * response.productData.price,
        };
      });
      if (listOder) {
        const rs = await Promise.all(listOder);
        // console.log(rs);
        setProducts(rs);
      }
    }
  };

  const createOrder = async () => {
    await apiCreateOder();
  };
  useEffect(() => {
    fetchProduct();
  }, [current]);
  return (
    <div className="mt-5 bg-white p-10">
      <h1 className="font-semibold text-[26px] border-b-2 uppercase">
        Giỏ Hàng
      </h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 mt-5  mb-3">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">
                STT
              </th>
              <th scope="col" class="px-6 py-3">
                Hình Ảnh
              </th>
              <th scope="col" class="px-6 py-3">
                Tên Sản Phẩm
              </th>
              <th scope="col" class="px-6 py-3">
                Đơn Giá
              </th>
              <th scope="col" class="px-6 py-3">
                Số Lượng
              </th>
              <th scope="col" class="px-6 py-3">
                Thành Tiền
              </th>
              <th scope="col" class="px-6 py-3">
                Xóa
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((el, value) => (
              <tr key={value} class="bg-white ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {value + 1}
                </th>
                <td class="px-6 py-4">
                  <img src={el.product.images} width={68} />
                </td>
                <td class="px-6 py-4">{el.product.title}</td>
                <td class="px-6 py-4">
                  {formatMoney(el.product.price)} VND/Hộp
                </td>
                <td class="px-6 py-4 text-center">
                  <span className="text-[20px] font-semibold block">
                    <span className="p-1 border cursor-pointer"> +</span>
                    <span className="mx-2 ">{el.quantity}</span>
                    <span className="p-1 border cursor-pointer ">-</span>
                  </span>
                </td>
                <td class="px-6 py-4 text-center">
                  {formatMoney(el.total)} VND
                </td>
                <td class="px-6 py-4 text-center">
                  <a>Xóa</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <a
          href={`${path.PAY}`}
          className="bg-[#f28902]  text-white font-bold py-2 px-3 rounded mr-3"
          onClick={() => createOrder()}
        >
          Thanh Toán
        </a>
        <Link
          to={`/${path.PRODUCTS}`}
          className="bg-[#f28902]  text-white font-bold py-3 px-4 rounded"
        >
          Chọn Thêm Sản Phẩm
        </Link>
      </div>
    </div>
  );
};
export default OrderProduct;
