import React from "react";
import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://nhathuocviet.vn/data/aditems/108/chuong-trinh-khuyen-mai-30-4-1-5%20(3).png" />
      </div>
      <div>
        <img src="https://nhathuocviet.vn/data/aditems/109/chuong-trinh-khuyen-mai-30-4-1-5.png" />
      </div>
      <div>
        <img src="https://nhathuocviet.vn/data/aditems/107/ly-do-mua-hang-tai-nha-thuoc-viet.png" />
      </div>
      <div>
        <img src="https://nhathuocviet.vn/data/aditems/98/banner-winmen-nhathuocviet.jpg" />
      </div>
      <div>
        <img src="https://nhathuocviet.vn/data/aditems/102/dang-ky-the-thanh-vien.png" />
      </div>
    </Slider>
  );
};
export default Banner;
