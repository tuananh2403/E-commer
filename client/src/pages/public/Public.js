import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation, Footer, Sidebar } from "../../components";
import { useParams } from "react-router-dom";
const Public = () => {
  const { pid, title } = useParams();
  const string = window.location.href.split("/");
  const param = string[string.length - 1];
  return (
    <div className="w-full flex  flex-col items-center bg-[#EEE]">
      <Header />
      <Navigation />
      {pid || param === "gio-hang" || param === "thanh-toan" ? (
        <div className="w-main flex flex-col gap-5 pl-5  ">
          <Outlet />
        </div>
      ) : (
        <div className="w-main mt-5 flex">
          <div className="flex flex-col gap-5 w-[25%] flex-auto ">
            <Sidebar />
            <span>New</span>
          </div>
          <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto ">
            <Outlet />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Public;
