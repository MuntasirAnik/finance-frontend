import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <div className="bg-slate-900 relative inset-x-0 bottom-0">
      <Footer style={{ textAlign: "center" }}>
        FinShark ©{new Date().getFullYear()} Created by Muntasir Anik
      </Footer>
    </div>
  );
};

export default FooterComponent;
