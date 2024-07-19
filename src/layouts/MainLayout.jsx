import React from "react";
import MenuPage from "../routers/MenuPage";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="menu">
        <MenuPage />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
