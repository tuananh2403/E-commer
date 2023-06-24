import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import path from "../../ultils/path";
import { apiAddCart, apiGetProduct, apiGetProducts } from "../../apis";
import Product from "../../components/Product";
import { useEffect, useState } from "react";
import { formatMoney } from "../../ultils/helper";
function DetailProduct() {
  const [product, setProduct] = useState();
  const { pid, title } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [listProducts, setListProducts] = useState([]);
  const increaseQuantity = () => {
    setQuantity((prev) => (prev += 1));
  };
  const fechtRelatedProducts = async () => {
    const response = await apiGetProducts({ category: product?.category });
    setListProducts(response.productsData);
  };
  const decreaseQuantity = () => {
    if (quantity <= 1) return quantity;
    setQuantity((prev) => (prev -= 1));
  };
  const fetchProductData = async () => {
    const response = await apiGetProduct(pid);
    setProduct(response.productData);
  };
  const addToCart = async () => {
    await apiAddCart({ pid: pid, quantity: quantity });
  };
  useEffect(() => {
    if (pid) fetchProductData();
    fechtRelatedProducts();
  }, [pid, listProducts]);

  return (
    <div>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link to="/" class="inline-flex items-center text-sm font-medium  ">
              Trang Chủ
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to={`/${path.PRODUCTS}`}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Sản Phẩm
              </Link>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link
                to={`/${path.LIST_DETAIL_PRODUCT}/${product?.category}`}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {product?.category}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                {product?.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="w-main">
        <div className="grid grid-cols-3 gap-1 mt-3 bg-white pt-5">
          <div className="pl-5">
            <img src={product?.images[0]} />
          </div>
          <div>
            <h1 className="font-semibold text-[20px] mb-4">{product?.title}</h1>
            <span className="mb-4 text-[14px] leading-5 block">
              {product?.decription}
            </span>
            <span className="text-[20px] block">
              <strong>Giá Bán : </strong>
              <span className="text-red-600 font-semibold">
                {formatMoney(product?.price)} VND
              </span>
            </span>
            <span className="text-[20px] font-semibold block">
              Số Lượng :{" "}
              <span
                className="p-1 border cursor-pointer"
                onClick={() => increaseQuantity()}
              >
                {" "}
                +
              </span>
              <span className="mx-2 ">{quantity}</span>
              <span
                className="p-1 border cursor-pointer "
                onClick={() => decreaseQuantity()}
              >
                -
              </span>
            </span>
            <div className="mt-3 mb-5">
              <button
                className="bg-main  text-white font-bold py-2 px-4 rounded mr-3"
                onClick={() => addToCart()}
              >
                Thêm Vào Giỏ Hàng
              </button>
              <button className="bg-main  text-white font-bold py-2 px-4 rounded">
                Mua Ngay
              </button>
            </div>
          </div>
          <div className="p-5 m-5 bg-gray-300 rounded">
            <p>{product?.decription}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white p-5">
        <p>
          CHI TIẾT SẢN PHẨM <br />
          Thành phần Mỗi viên có chứa 500mg cao hỗn hợp: Maca
          <br />
          (Maca-root)..........250mg <br />
          Viễn Chí (Radix Polygalae- root).....35mg
          <br />
          ích Trí Nhân (Balck Cardamom - fruit)....33mg
          <br /> Nhân Sâm (American Ginseng-root)....30mg <br />
          Đỗ Trọng (Cortex Eucommiae - bark)....32mg <br />
          Ngưu Tất (Ox Knee - root).......20mg <br />
          Sa Nhân (Cardamom - fruit).....20mg
          <br />
          Đương Quy (Angelica Root- root)....30mg <br />
          Xuyên Khung (Chanxiong - root).....10mg
          <br /> Tục Đoạn (Teasel Root/Flowering Plant - root). ...40mg
          <br />
          Thành phần khác: Gelatin, Magnesium Stearate, Silicon Dioxide. Công
          dụng Giúp bổ thận, tráng dương, tăng cường sinh lực, tăng cảm xúc ham
          muốn tình dục. Giúp tăng cường chức năng thận, điều hòa lượng đường và
          ngăn ngừa hủy hoại thận. Giảm nguy cơ rối loạn tuyến tiền liệt, giảm
          tiểu đêm, đái rắt. Tăng năng lượng và sức chịu đựng cho cơ thể phục
          hồi trương lực cơ, giảm bớt mệt mỏi. Đối tượng sử dụng Người có nhu
          cầu cải thiện chức năng sinh lý, muốn tăng cảm xúc ham muốn tình dục.
          Quy cách đóng gói: Chai 60 viên Bảo quản: Nơi khô ráo, tránh ánh sáng,
          tránh xa tầm tay trẻ em Xuất xứ: USA
        </p>
        <div className="mt-5 text-[24px]">
          <h1>Sản phẩm liên quan</h1>
          <div className="grid grid-cols-4 gap-4 mt-3">
            {listProducts?.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
