import React, { useState, useEffect } from "react";
import { apiGetProducts } from "../apis/product";
import icons from "../ultils/icons";
import { formatMoney } from "../ultils/helper";
import { useSelector } from "react-redux";
const BestSellers = () => {
  const { AiOutlineShoppingCart } = icons;
  const [bestSellers, setBestSellers] = useState(null);
  const fetchProducts = async () => {
    const response = await apiGetProducts({ sort: "-createAt" });
    setBestSellers(response.productsData);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="border-b border-main mt-4">
        <span className="text-main font-semibold text-xl">Sản phẩm Mới</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 ">
        {bestSellers?.map((product) => (
          <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img
                height="270px"
                class="rounded-t-lg "
                src={product.images[0]}
                alt="product image"
              />
            </a>
            <div class="px-5 py-5 ">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>

              <div class="flex items-center justify-between">
                <span class="text-xl text-main font-bold">
                  {formatMoney(product.price)}VND
                </span>

                <a
                  href="#"
                  class="text-white bg-[#f28902] hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-3 text-center"
                >
                  <AiOutlineShoppingCart size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
