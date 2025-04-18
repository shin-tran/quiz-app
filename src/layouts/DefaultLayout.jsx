import { Button, Flex, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>
            <Flex gap="small">
              <Outlet />
              <Button type="primary" href="login">Login</Button>
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
