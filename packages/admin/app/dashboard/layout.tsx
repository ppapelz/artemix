"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();

  return (
    <div className="h-full">
      <Layout className="h-full">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="text-neutral-100 text-xl text-center p-2">
            promptus
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <DeploymentUnitOutlined />,
                label: "Prompts",
                onClick: () => router.push("/dashboard/prompts"),
              },
              {
                key: "2",
                icon: <SettingOutlined />,
                label: "Settings",
                onClick: () => router.push("/dashboard/settings"),
              },
              {
                key: "3",
                icon: <DatabaseOutlined />,
                label: "Logs",
                onClick: () => router.push("/dashboard/logs"),
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            test
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
