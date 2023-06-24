import React from "react";
import { navigation } from "../ultils/contants";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="bg-main w-full flex justify-center">
      <div className="w-main h-[48px] py-2  text-sm flex items-center overflow-hidden ">
        {navigation.map((el) => (
          <NavLink
            to={el.path}
            key={el.id}
            className="py-4 px-3 text-white hover:bg-[#0003] text-base "
          >
            {el.value}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
