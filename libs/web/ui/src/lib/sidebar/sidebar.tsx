'use client';

import { cn } from '@promptus/utils';
import {
  BellDot,
  DollarSign,
  Fingerprint,
  Github,
  Linkedin,
  LayoutDashboard,
} from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import logo from './../../assets/dummy-logo-5b.png';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export interface SidebarProps {
  setTitle: (title: string) => void;
}

const data = [
  { link: '/', label: 'Dashboard', icon: LayoutDashboard },
  { link: '/notifications', label: 'Notifications', icon: BellDot },
  { link: '/billing', label: 'Billing', icon: DollarSign },
  { link: '/security', label: 'Security', icon: Fingerprint },
];

export function Sidebar(props: SidebarProps) {
  const currentPath = usePathname();
  const [active, setActive] = useState(currentPath);

  const links = data.map((item) => (
    <Link
      className={cn(
        `
        flex items-center text-lg font-medium px-2.5 
        py-3.5 rounded-sm hover:bg-zinc-100`,
        item.link === active ? `bg-sky-500 bg-opacity-20` : ''
      )}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.link);
        props.setTitle(item.label);
      }}
    >
      <item.icon className={cn('mr-4 h-6 w-6')} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <aside
      className={cn('flex flex-col h-screen p-4 border-r', styles.sidebar)}
    >
      <div className={cn('flex-1')}>
        <div className={cn('pb-4 mb-10')}>
          <Image src={logo} alt="logo" priority={true} />
        </div>
        {links}
      </div>

      <div className={cn('flex justify-between items-center border-t')}>
        <div className={cn('mt-3')}>
          <a href="/" onClick={(event) => event.preventDefault()}>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4"></Linkedin>
            </Button>
          </a>
          <a href="/" onClick={(event) => event.preventDefault()}>
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4"></Github>
            </Button>
          </a>
        </div>
        <Badge variant="outline" className={cn('mt-3 px-4 max-h-6')}>
          v3.1.1
        </Badge>
      </div>
    </aside>
  );
}

export default Sidebar;
