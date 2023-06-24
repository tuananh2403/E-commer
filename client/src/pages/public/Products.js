import React, { useEffect, useState } from "react";
import { apiGetListProducts, apiGetProducts } from "../../apis/product";
import Product from "../../components/Product";
import { Pagination } from "../../components";
const Products = () => {
  const [listProducts, setListProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState();
  const [page, setPage] = useState(1);

  const fetchListProducts = async () => {
    const response = await apiGetProducts({ page: page });
    setListProducts(response.productsData);
    setTotalProduct(response.counts);
  };
  useEffect(() => {
    fetchListProducts();
  }, [page]);
  const totalPage = Math.ceil(totalProduct / listProducts.length);
  return (
    <div>
      <div className="border-b border-main">
        <span className="text-main font-semibold text-xl">Sản phẩm</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
        {listProducts?.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <Pagination total={totalPage} setPage={setPage} />
    </div>
  );
};
export default Products;
