'use client';

import { ConfigProvider } from 'antd';
import defaultTheme from './theme/themeConfig';
import {
  DatabaseOutlined,
  DeploymentUnitOutlined,
  SettingOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { DashboardLayout, MenuItem } from '@/libs/web-libs/ui/src';

import './globals.css';

const MENU_ITEMS: Array<MenuItem> = [
  {
    key: 'dashboard',
    icon: <HomeOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'prompts',
    icon: <DeploymentUnitOutlined />,
    label: 'Prompts',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
  {
    key: 'logs',
    icon: <DatabaseOutlined />,
    label: 'Logs',
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <StyledComponentsRegistry>
          <ConfigProvider theme={defaultTheme}>
            <div className="h-full">
              <DashboardLayout menuItems={MENU_ITEMS}>{children}</DashboardLayout>
            </div>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
