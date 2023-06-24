import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import path from "../ultils/path";
const Sidebar = () => {
  const { categories } = useSelector((state) => state.app);

  return (
    <div className="flex flex-col">
      {categories?.map((el) => (
        <NavLink key={el._id} className={`bg-main hover:text-main `}>
          <Link className="text-white font-semibold px-[10px] ">
            {el.title}
          </Link>
          {el.variants.map((variant) => (
            <Link
              to={`${path.LIST_DETAIL_PRODUCT}/${variant}`}
              className="flex flex-col  border-b-2 py-[5px] px-[10px] text-black bg-white"
            >
              {variant}
            </Link>
          ))}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
