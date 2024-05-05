import React from "react";
import { Outlet } from "react-router-dom";
import Navdesy from "./Navdesy";
import useWindowSize from "../hooks/useWindowSize";
const Layout = () => {
  const { width } = useWindowSize();
  return (
    <div className="">
      <Navdesy />
      <div className="min-h-14"></div>
      <div className={`${width >=500 && " ml-14"}`}>
      <Outlet />
      </div>
    </div>
  );
};
export default Layout;
