import React from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import logo from "../Navbar/logo.png";
import { FaHome } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";

const { Header, Content, Sider,Footer } = Layout;

type Props = {};

const items1: MenuProps["items"] = [
    // { key: "0", label:  },
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/search">Search</Link> },
    { key: "3", label: <Link to="/login">Login</Link> },
    { key: "4", label: <Link to="/register">Signup</Link> },
   
  ];

const Layouts = (props: Props) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout  style={{ minHeight: '100vh' }}>
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo space-between" />
      <Link to="/"><img src={logo} alt="" /></Link>
     <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      /> 
    </Header>
    <Layout>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
           <Outlet />
        </Content>
      </Layout>
    </Layout>
    <Footer style={{ textAlign: 'center',flexShrink: 0  }}>
          ©{new Date().getFullYear()} Created by Muntasir Anik
        </Footer>
  </Layout>
  );
};

export default Layouts;
