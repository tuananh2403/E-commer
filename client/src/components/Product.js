import React from "react";
import { formatMoney } from "../ultils/helper";
import icons from "../ultils/icons";

import path from "../ultils/path";
import { apiAddCart } from "../apis";
const Product = ({ product }) => {
  const { AiOutlineShoppingCart } = icons;
  const addToCart = async () => {
    await apiAddCart({ pid: product._id, quantity: 1 });
  };

  return (
    <a
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
      href={`${path.DETAIL_PRODUCT}/${product?._id}/${product?.title}`}
    >
      <img
        height="270px"
        class="rounded-t-lg"
        src={product.images[0]}
        alt="product image"
      />

      <div class="px-5 py-5 ">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
        </a>

        <div class="flex items-center justify-between">
          <span class="text-xl text-main font-bold">
            {formatMoney(product.price)} VND
          </span>

          <a
            href={`${path.CART}`}
            class="text-white bg-[#f28902] hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm p-3 text-center"
            onClick={() => addToCart()}
          >
            <AiOutlineShoppingCart size={20} />
          </a>
        </div>
      </div>
    </a>
  );
};
export default Product;
