import React, { useState, useEffect } from "react";
import { apiGetProducts } from "../apis/product";
import Product from "./Product";
import { useSelector } from "react-redux";

const BestSellers = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div>
      <div className="border-b border-main">
        <span className="text-main font-semibold text-xl">
          Sản phẩm bán chạy
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        {products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
