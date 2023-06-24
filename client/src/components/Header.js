import React, { memo, useEffect } from "react";
import logo from "../assets/logo.png";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import path from "../ultils/path";
import { useSelector, useDispatch } from "react-redux";
import { getCurrent } from "../store/user/asyncAction";
import { logout } from "../store/user/userSlice";

const Header = () => {
  const {
    RiPhoneFill,
    TbLockOpen,
    FiUserPlus,
    AiOutlineShoppingCart,
    LuLogOut,
  } = icons;
  const dispath = useDispatch();
  const { isLoggedIn, current } = useSelector((state) => state.user);

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      if (isLoggedIn) dispath(getCurrent());
    }, 300);
    return () => {
      clearTimeout(setTimeoutId);
    };
  }, [isLoggedIn, dispath]);
  return (
    <div className=" w-main flex justify-between h-auto ">
      <Link to={`/${path.HOME}`}>
        <img src={logo} className="w-[94px]" />
      </Link>
      <div className="flex gap-3">
        <div className="flex gap-2 items-center">
          <RiPhoneFill color="red" size={20} />
          <span>
            Hotline: <span className="font-semibold">0985508450</span>
          </span>
        </div>
        {isLoggedIn && current ? (
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 ">
              Xin Chào
              <Link
                to={
                  current?.role === "admin"
                    ? `/${path.ADMIN}/${path.DASHBOARD}`
                    : `/${path.MEMBER}/${path.PERSONAL}`
                }
                className="text-main"
              >
                {` ${current?.firstname} ${current?.lastname}`}
              </Link>
            </div>
            <div className="flex items-center gap-1 ">
              <LuLogOut />
              <span
                onClick={() => dispath(logout())}
                className="cursor-pointer"
              >
                Logout
              </span>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-1 ">
              <TbLockOpen size={20} />
              <Link to={`/${path.LOGIN}`}>LOGIN</Link>
            </div>
            <div className="flex items-center gap-1 ">
              <FiUserPlus size={20} />
              <Link to={`/${path.REGISTER}`}>REGISTER</Link>
            </div>
          </div>
        )}
        <div className="flex items-center gap-1">
          <AiOutlineShoppingCart size={20} />
          <a href={`/${path.CART}`}>Giỏ Hàng</a>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
