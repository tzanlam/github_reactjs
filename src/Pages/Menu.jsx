import React from "react";
import { Link } from "react-router-dom";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

const items = [
  {
    key: 1,
    lable: <Link to="/">Home</Link>,
  },
  {
    key: 2,
    lable: <Link to="/aboutus">About Us</Link>,
  },
  {
    key: 3,
    lable: <Link to="/room">Phòng</Link>,
  },
  {
    key: 4,
    lable: (
      <Link to="/signup">
        <UserOutlined title="Đăng kí" />
      </Link>
    ),
  },
  {
    key: 5,
    lable: (
      <Link to="/login">
        <LoginOutlined title="Đăng nhập" />
      </Link>
    ),
  },
];

const Menu = () => (
  <Tabs defaultActiveKey="1">
    {items.map((item) => (
      <Tabs.TabPane tab={item.lable} key={item.key} />
    ))}
  </Tabs>
);

export default Menu;
