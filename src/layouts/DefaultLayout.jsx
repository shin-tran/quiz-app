import { Button, Flex, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const navList = [
    { id: 1, label: "Home" },
    { id: 2, label: "Topic" },
    { id: 3, label: "Answers" },
  ];

  const items = navList.map((item) => {
    return {
      key: item.id,
      label: (
        <NavLink
          to={`${item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`}`}
        >
          {item.label}
        </NavLink>
      ),
    };
  });

  const handleLogout = () => {
    localStorage.isAuthenticated = false;
  };

  return (
    <>
      <Layout>
        <Header
          style={{ display: "flex", alignItems: "center", background: "none" }}
        >
          <div className="logo">Quiz</div>
          <Flex justify="center" align="center">
            <Menu
              mode="horizontal"
              items={items}
              style={{ flex: 1, minWidth: 0 }}
            ></Menu>
          </Flex>
          {localStorage.isAuthenticated === true ? (
            <Button type="link" onClick={handleLogout}>
              Đăng xuất
            </Button>
          ) : (
            <></>
          )}
        </Header>
        <Layout>
          <Content>
            <Flex gap="small" justify="center" align="center">
              <Outlet />
            </Flex>
          </Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
    </>
  );
};

export default DefaultLayout;
