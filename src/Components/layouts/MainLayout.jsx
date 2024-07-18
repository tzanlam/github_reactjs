import React from "react";
import Menu from "../../Pages/Menu";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
