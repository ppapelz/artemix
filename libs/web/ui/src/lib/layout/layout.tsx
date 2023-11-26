'use client';

import { useCallback, useState } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar, { SidebarItem } from '../sidebar/sidebar';
import { LayoutDashboard, FileJson, ScrollText, Bot } from 'lucide-react';
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

const getActiveLink = (currentPath: string): string => {
  return sidebarItems.find((item) => item.link === currentPath)?.label || ''
}

export function Layout({ children }: LayoutProps) {
  const currentPath = usePathname();
  const [activeLink, setActiveLink] = useState<string>(getActiveLink(currentPath));
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setShowSidebar(prev => !prev);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        sidebarItems={sidebarItems}
        show={showSidebar}
        toggleSidebar={toggleSidebar}
      ></Sidebar>
      <div className="flex flex-col flex-grow w-screen md:w-full mx-8 my-6">
        <Navbar
          title={activeLink}
          toggleSidebar={toggleSidebar}
        ></Navbar>
        {children}
      </div>
    </div>
  );
}

export default Layout;
