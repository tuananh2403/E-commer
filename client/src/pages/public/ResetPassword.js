import React, { useState } from "react";

import path from "../../ultils/path";
import { useParams } from "react-router-dom";
import { apiResetPassword } from "../../apis/user";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState({
    newPassword: "",
    newComfirmPassword: "",
  });
  const changePassword = async () => {
    if (password.newPassword === password.newComfirmPassword) {
      const response = await apiResetPassword({
        password: password.newPassword,
        token: token,
      });
    } else {
      alert("Mật khẩu không khớp xin vui lòng nhập lại");
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#3daa12] underline">
          Đăng Nhập
        </h1>
        <div className="mb-2">
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#3daa12] focus:ring-[#3daa12] focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Mật Khẩu Mới"
            onChange={(e) =>
              setPassword((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-[#3daa12] focus:ring-[#3daa12] focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Nhập Lại Mật Khẩu Mới"
          />
        </div>

        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-main rounded-md hover:bg-main-600 focus:outline-none focus:bg-purple-600"
            onClick={() => changePassword()}
          >
            Thay Đổi Mật Khẩu
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
