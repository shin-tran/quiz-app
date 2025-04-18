import { Button, Flex, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";

const DefaultLayout = () => {
  const navList = [
    { id: 1, label: "Home" },
    { id: 2, label: "Topic" },
    { id: 3, label: "Answers" },
  ];

  const items = navList.map((item) => {
    return { key: item.id, label: item.label };
  });

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="logo">Quiz</div>
          <Menu
            theme="light"
            mode="horizontal"
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          ></Menu>
        </Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>
            <Flex gap="small">
              <Outlet />
              <Button type="primary" href="login">
                Login
              </Button>
              <Button type="primary">Register</Button>
            </Flex>
          </Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </>
  );
};

export default DefaultLayout;
