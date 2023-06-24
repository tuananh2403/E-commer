import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import path from "../../ultils/path";
import InputField from "../../components/inputField";
import { apiRegister } from "../../apis/user";
import { useNavigate } from "react-router-dom";
import { validate } from "../../ultils/helper";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/app/appSlice";
import { Loading } from "../../components";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidFields, setInvalidFieds] = useState([]);
  const [payload, setPayload] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  const handleRegister = useCallback(async () => {
    validate(payload, setInvalidFieds);

    if (payload.password === payload.confirmpassword) {
      dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
      const response = await apiRegister(payload);
      dispatch(showModal({ isShowModal: false, modalChildren: null }));
      if (response.success) {
        navigate(`/${path.LOGIN}`);
      } else {
        alert(response.mes);
      }
    } else {
      alert("Mật Khẩu Phải Trùng Nhau");
    }
  }, [payload]);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Đăng Ký
        </h1>

        <InputField
          nameKey="firstname"
          value={payload.firstname}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <InputField
          nameKey="lastname"
          value={payload.lastname}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <InputField
          type="email"
          nameKey="email"
          value={payload.email}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <InputField
          nameKey="mobile"
          value={payload.mobile}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <InputField
          type="password"
          nameKey="password"
          value={payload.password}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <InputField
          type="password"
          nameKey="confirmpassword"
          value={payload.confirmpassword}
          setValue={setPayload}
          invalidFields={invalidFields}
          setInvalidFieds={setInvalidFieds}
        />
        <Link href="#" className="text-xs text-purple-600 hover:underline">
          Quên mật khẩu?
        </Link>
        <div className="mt-6">
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            onClick={() => handleRegister()}
          >
            Đăng Ký
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Bạn đã có tài khoản{" "}
          <Link
            to={`/${path.LOGIN}`}
            className="font-medium text-purple-600 hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
