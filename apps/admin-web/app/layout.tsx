"use client";

import "./globals.css";
import { ConfigProvider } from "antd";
import defaultTheme from "./theme/themeConfig";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useRouter, usePathname } from "next/navigation";
import StyledComponentsRegistry from "../lib/AntdRegistry";

const { Header, Sider, Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [pageLabel, setPageLabel] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    const currentLabel = currentPath?.split("/")[1] || "dashboard";
    setPageLabel(currentLabel);
  }, []);

  const handleNavigate = ({ key }: { key: string }) => {
    setPageLabel(key);
    router.push(`/${key}`);
  };

  return (
    <html lang="en">
      <body className="h-screen">
        <StyledComponentsRegistry>
          <ConfigProvider theme={defaultTheme}>
            <div className="h-full">
              <Layout className="h-full" hasSider>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                  <div className="text-neutral-100 text-xl text-center p-2">
                    promptus
                  </div>
                  <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[pageLabel]}
                    onClick={handleNavigate}
                    items={[
                      {
                        key: "dashboard",
                        icon: <HomeOutlined />,
                        label: "Dashboard",
                      },
                      {
                        key: "prompts",
                        icon: <DeploymentUnitOutlined />,
                        label: "Prompts",
                      },
                      {
                        key: "settings",
                        icon: <SettingOutlined />,
                        label: "Settings",
                      },
                      {
                        key: "logs",
                        icon: <DatabaseOutlined />,
                        label: "Logs",
                      },
                    ]}
                  />
                </Sider>
                <Layout>
                  <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                      type="text"
                      icon={
                        collapsed ? (
                          <MenuUnfoldOutlined />
                        ) : (
                          <MenuFoldOutlined />
                        )
                      }
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                      }}
                    />
                    <span className="uppercase">{pageLabel}</span>
                  </Header>
                  <Content
                    style={{
                      margin: "24px 16px",
                      padding: 24,
                      minHeight: 280,
                      background: colorBgContainer,
                    }}
                  >
                    {children}
                  </Content>
                </Layout>
              </Layout>
            </div>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
