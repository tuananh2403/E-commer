import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white mt-4 w-full">
      <div className="w-main mx-auto flex gap-x-4">
        <div className="w-[30%] flex flex-col my-3">
          <h3>TRUY CẬP NHANH</h3>
          <span>Liên Hệ</span>
          <span>Giới thiệu công ty</span>
          <span>Hướng dẫn mua hàng</span>
          <span>Bảo mật thông tin khách hàng</span>
          <span>Hình thức thanh toán và chính sách vận chuyển</span>
        </div>
        <div className="w-[70%] flex flex-col my-3">
          <h3>Ngân Hàng Á Đông</h3>
          <span>Số TK: 0103720160, PGD Tô Hiến Thành, TP. HCM</span>
          <span>Chủ Tài Khoản: Dương Công Đông.</span>
          <span>Ngân hàng VietCombank </span>
          <span>Số TK: 042 100 385 5531</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
