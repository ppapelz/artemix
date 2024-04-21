'use client';

import { useCallback, useState } from 'react';
import Navbar from '../navbar/navbar';
import Sidebar, { SidebarItem } from '../sidebar/sidebar';
import {
  LayoutDashboard,
  FileJson,
  ScrollText,
  Bot,
  Figma,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { signOut } from 'supertokens-auth-react/recipe/session';
export interface LayoutProps {
  children: React.ReactNode;
}

const sidebarItems: Array<SidebarItem> = [
  { link: '/', label: 'Dashboard', icon: LayoutDashboard },
  { link: '/prompts', label: 'Prompts', icon: FileJson },
  { link: '/logs', label: 'Logs', icon: ScrollText },
  { link: '/ai-connections', label: 'AI Connections', icon: Bot },
  { link: '/ui-elements', label: 'Ui Elements', icon: Figma },
];

const getActiveLink = (currentPath: string): string => {
  return sidebarItems.find((item) => item.link === currentPath)?.label || '';
};

export function Layout({ children }: LayoutProps) {
  const currentPath = usePathname();
  const [activeLink, setActiveLink] = useState<string>(
    getActiveLink(currentPath)
  );
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const toggleSidebar = useCallback(() => {
    setShowSidebar((prev) => !prev);
  }, []);

  const onLogout = async () => {
    await signOut();
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        onLogout={onLogout}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        sidebarItems={sidebarItems}
        show={showSidebar}
        toggleSidebar={toggleSidebar}
      ></Sidebar>
      <div className="flex flex-col flex-grow w-screen md:w-full">
        <Navbar toggleSidebar={toggleSidebar}>
          <h1 className="text-xl font-semibold">{activeLink}</h1>
        </Navbar>
        <div className='mx-8 pt-6'>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
