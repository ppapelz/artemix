'use client';

import { useState } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar, { SidebarItem } from '../sidebar/sidebar';
import {
  LayoutDashboard,
  FileJson,
  ScrollText,
  Bot,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export interface LayoutProps {
  children: React.ReactNode;
}

const sidebarItems: Array<SidebarItem> = [
  { link: '/', label: 'Dashboard', icon: LayoutDashboard },
  { link: '/prompts', label: 'Prompts', icon: FileJson },
  { link: '/logs', label: 'Logs', icon: ScrollText },
  { link: '/ai-connection', label: 'AI Connection', icon: Bot },
];

export function Layout(props: LayoutProps) {
  const currentPath = usePathname();
  const [active, setActive] = useState(
    sidebarItems.find((item) => item.link === currentPath)?.label || ''
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar
        active={active}
        setActive={setActive}
        sidebarItems={sidebarItems}
      ></Sidebar>
      <div className="w-full mx-8 my-6 place-content-center">
        <Navbar title={active}></Navbar>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
