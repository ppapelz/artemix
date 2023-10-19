'use client';

import { useEffect, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';

import styles from './dashboard-layout.module.scss';

const { Sider, Content } = Layout;
const DEFAULT_SELECTED_PAGE_KEY = 'dashboard';

export type MenuItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
};

export type DashboardLayoutProps = {
  children: React.ReactNode;
  menuItems: Array<MenuItem>;
  selectedPageKey?: string;
};

export function DashboardLayout(props: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedPageKey, setSelectedPageKey] = useState('');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    setMounted(true);
    setCurrentPage();
  }, []);

  const setCurrentPage = (): void => {
    const currentLabel = currentPath?.split('/')[1] || DEFAULT_SELECTED_PAGE_KEY;
    setSelectedPageKey(currentLabel);
  }

  const handleNavigate = ({ key }: { key: string }): void => {
    setSelectedPageKey(key);
    router.push(`/${key}`);
  };

  return (
    <Layout className={styles['layout-wrapper']} hasSider>
      <Sider trigger={null} collapsible collapsed={collapsed} width={256}>
        <div className={styles['logo']}>{collapsed ? 'P' : 'PROMTUS'}</div>
        <Button
          type="primary"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          size="small"
          className={`${styles['toggle-icon']} ${
            collapsed ? styles['toggle-icon-collapsed'] : ''
          }`}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedPageKey]}
          onClick={handleNavigate}
          items={props.menuItems}
          className={styles['menu']}
        />
      </Sider>
      <Layout>
        <Content className={styles['content']}>
          <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
