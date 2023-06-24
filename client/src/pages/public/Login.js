import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import path from "../../ultils/path";
import InputField from "../../components/inputField";
import { apiLogin } from "../../apis/user";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";
import { validate } from "../../ultils/helper";
import { showModal } from "../../store/app/appSlice";
import { Loading } from "../../components";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const [invalidFields, setInvalidFieds] = useState([]);
  const handleLogin = useCallback(async () => {
    validate(payload, setInvalidFieds);
    dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
    const response = await apiLogin(payload);
    if (response.success) {
      dispatch(
        login({
          isLoggedIn: "true",
          token: response.accessToken,
        })
      );
      navigate(`/${path.HOME}`);
    } else {
      alert("Đăng nhập thất bại");
    }
  }, [payload]);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#3daa12] underline">
          Đăng Nhập
        </h1>

        <InputField
          value={payload.email}
          setValue={setPayload}
          nameKey="email"
          type="email"
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <InputField
          type="password"
          value={payload.password}
          setValue={setPayload}
          nameKey="password"
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />

        <Link
          to={`/${path.FORGOTPASSWORD}`}
          href="#"
          className="text-xs text-[#3daa12] hover:underline"
        >
          Quên Mật Khẩu
        </Link>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-main rounded-md hover:bg-main-600 focus:outline-none focus:bg-purple-600"
            onClick={() => handleLogin()}
          >
            Đăng Nhập
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Bạn có tài khoản chưa{" "}
          <Link
            to={`/${path.REGISTER}`}
            className="font-medium text-[#3daa12] hover:underline"
          >
            Đăng Ký
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
