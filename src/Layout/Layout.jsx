import React from "react";
import { Outlet } from "react-router-dom";
import Navdesy from "./Navdesy";
const Layout = () => {
  return (
    <div className="">
      <Navdesy />
      <div className="min-h-10"></div>
      <Outlet />
    </div>
  );
};
export default Layout;
