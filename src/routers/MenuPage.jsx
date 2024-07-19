import React from "react";
import { Tabs } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "2",
    label: <Link to="/about">About Us</Link>,
  },
  {
    key: "3",
    label: <Link to="/account">Account List</Link>,
  },
  {
    key: "4",
    label: (
      <Link to="/signup">
        <UserOutlined title="Sign Up" />
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link to="/login">
        <LoginOutlined title="Login" />
      </Link>
    ),
  },
];

const MenuPage = () => (
  <Tabs defaultActiveKey="1">
    {items.map((item) => (
      <Tabs.TabPane tab={item.label} key={item.key} />
    ))}
  </Tabs>
);

export default MenuPage;
