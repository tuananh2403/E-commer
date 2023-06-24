import React, { useState, useEffect } from "react";
import { Banner, Sidebar, BestSellers, NewProducts } from "../../components";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <Banner />
        <div className="flex mt-6">
          <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto ">
            <div>
              <BestSellers />
              <NewProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
