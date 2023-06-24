import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetProducts } from "../../apis";
import Product from "../../components/Product";

import icons from "../../ultils/icons";

const ListProductCategory = () => {
  const { AiOutlineShoppingCart } = icons;

  const [listProducts, setListProducts] = useState();
  const { title } = useParams();

  const fetchListProducts = async () => {
    const response = await apiGetProducts({ category: title });
    setListProducts(response.productsData);
  };
  useEffect(() => {
    fetchListProducts();
  }, [listProducts]);

  return (
    <div>
      <div className="border-b border-main mt-4">
        <span className="text-main font-semibold text-xl">{title}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 ">
        {listProducts?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};
export default ListProductCategory;
