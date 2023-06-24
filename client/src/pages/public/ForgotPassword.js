import React, { useState } from "react";
import { Link } from "react-router-dom";
import path from "../../ultils/path";
import InputField from "../../components/inputField";
import { apiForgotPassword } from "../../apis/user";

const ForgotPassword = () => {
  const [payload, setPayload] = useState({
    email: "",
  });
  const [invalidFields, setInvalidFieds] = useState([]);
  const handledEmailForgot = async () => {
    const response = await apiForgotPassword(payload);
    if (response.success) {
      alert("Xin vui lòng kiểm tra email để thay đổi mật khẩu");
    } else {
      alert("Email không tổn tại xin vui lòng kiểm tra lại");
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#3daa12] underline">
          Quên Mật Khẩu
        </h1>

        <InputField
          value={payload.email}
          setValue={setPayload}
          nameKey="email"
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <span>
          Email đăng ký: địa chỉ email lúc đăng ký. Nếu thông tin hợp lệ, mật
          khẩu mới của bạn sẽ được gởi đến địa chỉ email này.
        </span>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-main rounded-md hover:bg-main-600 focus:outline-none focus:bg-purple-600"
            onClick={() => handledEmailForgot()}
          >
            Gửi
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to={`/${path.REGISTER}`}
            className="font-medium text-[#3daa12] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;
