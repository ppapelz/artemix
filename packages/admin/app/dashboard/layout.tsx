"use client";

import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useRouter, usePathname } from "next/navigation";

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageLabel, setPageLabel] = useState("");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const currentPath = usePathname();

  useEffect( () => {
    const currentLabel = currentPath?.split('/')[2] || 'prompts'
    setPageLabel(currentLabel);
    router.push(`/dashboard/${currentLabel}`);
  }, [])

  const handleNavigate = ({ key }: { key: string }) => {
    setPageLabel(key);
    router.push(`/dashboard/${key}`);
  };

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
            selectedKeys={[pageLabel]}
            onClick={handleNavigate}
            items={[
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
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
